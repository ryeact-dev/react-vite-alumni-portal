import axios from 'axios';

export async function onLoginUser(user) {
  console.log(user);

  const response = await axios.get('/api/account/login', { user });
  return response.data;
}
