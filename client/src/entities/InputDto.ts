
export interface InputDto {
  type: string;
  placeholder: string;
  name: string;
}

export const InputEmail: InputDto = {
  type: "email",
  placeholder: "Email",
  name: 'email'
};

export const InputPassword: InputDto = {
  type: "password",
  placeholder: "Password",
  name: 'password'
};

