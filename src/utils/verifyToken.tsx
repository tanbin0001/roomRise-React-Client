import { jwtDecode } from 'jwt-decode';

export const verifyToken : any= (token: string) => {
  return jwtDecode(token);
};
