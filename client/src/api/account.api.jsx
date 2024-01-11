import axios from 'axios';

export async function onLoginUser(user) {
  const response = await axios.get('/api/account/login', { user });
  return response.data;
}
