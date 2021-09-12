export interface User {
  id: number | string;
  name: string;
  username: string;
  email: string;
  password: string; // !: You usually don't want plain passwords showing up.
}

export const emptyUser: User = {
  id: 0,
  name: '',
  username: '',
  email: '',
  password: '',
};
