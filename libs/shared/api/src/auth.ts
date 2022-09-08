import { apiClient } from '@streali/shared/utils';
import { AuthCheckSchema, AuthUserSchema } from '@streali/shared/schema';

export const getAuthCheck = async () => {
  const response = await apiClient.get('/auth/check');

  return AuthCheckSchema.parse(response.data);
};

export const getAuthUser = async () => {
  const response = await apiClient.get('/me');

  return AuthUserSchema.parse(response.data);
};

export const logout = () => {
  return apiClient.post('/auth/logout');
};
