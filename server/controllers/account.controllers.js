const pool = require('../config/db.config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = process.env.JWTSECRET;

async function loginUser(req, res, next) {
  const { email, password } = req.body;
  try {
    const userData = await pool.query(
      'SELECT user_password, user_id FROM users WHERE user_email = $1',
      [email.toLowerCase()]
    );

    console.log(email);

    if (!userData.rows.length)
      return res.status(404).send('User email does not exist!');

    if (userData) {
      const passOk = bcrypt.compareSync(
        password,
        userData.rows[0].user_password
      );

      const user_id = userData.rows[0].user_id;

      if (passOk) {
        const token = jwt.sign({ user_id }, jwtSecret, {});
        const { user_password, ...user } = userData.rows[0];

        res.cookie('auth_token', token);
        res.status(200).json(user);
      } else {
        res.status(401).send('Wrong Password');
      }
    }
  } catch (err) {
    console.error('login error :: ', err);
  }
}
exports.loginUser = loginUser;

async function updatePassword(req, res, next) {
  const userId = req.user.id;
  const { currentPassword, newPassword } = req.body;

  const currentUser = await pool.query(
    'SELECT user_email, user_password FROM users WHERE user_id = $1',
    [userId]
  );

  if (!currentUser.length > 0)
    return next(
      errorHandler(403, 'You can only update your own account password')
    );

  const passOk = bcrypt.compareSync(
    currentPassword,
    currentUser.rows[0].user_password
  );

  if (!passOk) return next(errorHandler(401, 'Current password is wrong'));

  try {
    await pool.query('UPDATE users SET user_password = $1 WHERE user_id = $2', [
      bcrypt.hashSync(newPassword, bcryptSalt),
      userId,
    ]);
    res.status(200).json('Password successfully updated.');
  } catch (err) {
    next(errorHandler(401, err.message));
  }
}
exports.updatePassword = updatePassword;
