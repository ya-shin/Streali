import axios from 'axios';

const endpoint = process.env['NX_API_ENDPOINT'];

export const apiClient = axios.create({
  baseURL: endpoint,
  withCredentials: true,
});
