require('dotenv').config();
const PORT = process.env.PORT ?? 4000;
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const pool = require('./config/db.config');

// Routes
const accountRoute = require('./routes/account.route');

const whitelist = [
  process.env.HOST_URL,
  process.env.VITE_CLIENT_URL,
  process.env.HOST_DOMAIN_URL,
];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(__dirname + '/images'));
app.use(cookieParser());
app.use(helmet());
app.use(
  cors({
    credentials: true,
    origin: whitelist,
  })
);

app.use('/api/account', accountRoute);

// Error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).send(message);
});

app.listen(PORT, '0.0.0.0', () =>
  console.log(`Server running on PORT ${PORT}`)
);
