import axios from 'axios';

export async function onLoginUser(user) {
  const response = await axios.post('/api/account/login', user);
  return response.data;
}
