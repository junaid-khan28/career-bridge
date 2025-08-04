export interface UserPropTypes {
  name: string;
  email: string;
  password: string;
}

export interface UserLoginPropTypes {
  email: string;
  password: string;
}

// it is being used in useActionState hooks in login component
export interface ActionState {
  message: string;
}