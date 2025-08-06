export interface UserLoginPropTypes {
  email: string;
  password: string;
}

export interface UserPropTypes extends UserLoginPropTypes {
  name: string;
}

// it is being used in useActionState hooks in login component
export interface AuthActionState {
  message: string;
}

