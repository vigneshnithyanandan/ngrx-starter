export interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  gender: UserGender;
  image?: string;
}

export enum UserGender {
  MALE = 'male',
  FEMALE = 'female',
}

export interface UserState {
  userList: User[];
  isLoading: boolean;
}

export type CreatedUser = Omit<User, 'id'>;

export enum UserFormMode {
  CREATE = 'create',
  EDIT = 'edit',
}
