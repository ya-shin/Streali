import axios from 'axios';

export const getJWTToken = async (
  access_token: string,
  provider: string,
  expire: string
) => {
  const { data } = await axios.get(
    `${process.env['NX_API_URL']}/auth/${provider}/callback?access_token=${access_token}`
  );
  localStorage.setItem('token', data.jwt);
  localStorage.setItem('user', JSON.stringify(data.user));
  return data;
};
