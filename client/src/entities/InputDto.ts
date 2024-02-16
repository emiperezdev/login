
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

export const InputAge: InputDto = {
  type: "number",
  placeholder: "Age",
  name: 'age'
};

export const InputName: InputDto = {
  type: "text",
  placeholder: "Name",
  name: 'name'
};
