import { User, registerUser } from '../interfaces';

export const fakeCallApi = ({ email, password }: User): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('Fake API response');
    if (email && password) {
      reject('Not required');
    }
  });
};

export const fakeCallApiRegister = ({
  username,
  email,
  password,
}: registerUser): Promise<string> => {
  return new Promise((resolve, reject) => {
    resolve('Fake API register response');
    if (username && email && password) {
      reject('Not required');
    }
  });
};
