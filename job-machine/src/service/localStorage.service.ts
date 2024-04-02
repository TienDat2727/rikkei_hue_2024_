
export const readToken = (): string => {
  return localStorage.getItem('accessToken') || 'bearerToken';
};
