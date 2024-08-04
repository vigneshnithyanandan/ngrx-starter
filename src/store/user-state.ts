export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: UserGender;
}

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface AppState {
  users: UserState;
}

export interface UserState {
  userList: User[];
  isLoading: boolean;
}

export type CreatedUser = Omit<User, 'id'>;
