import { Link } from "react-router-dom";
import InputField from "./InputField";
import { InputEmail, InputPassword } from "../entities/InputDto";
import Title from "./Title";
import SubmitButton from "./SubmitButton";
import CenterContainer from "./CenterContainer";
import { useForm } from "react-hook-form";
import LoginDto from "../entities/LoginDto";
import InputErrorMessage from "./InputErrorMessage";

function LoginForm() {
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginDto>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <CenterContainer>
      <form
        onSubmit={onSubmit}
        className="m-5 border p-5 max-w-md rounded-md drop-shadow"
      >
        <Title text="Login" />

        <InputField register={register} inputData={InputEmail} />
        {errors.email && (
          <InputErrorMessage message="Email is required" />
        )}

        <InputField register={register} inputData={InputPassword} />
        {errors.password && (
          <InputErrorMessage message="Password is required" />
        )}

        <SubmitButton text="Login" />

        <p className="mt-5 text-slate-600">
          Don't have an account?{" "}
          <Link className="text-sky-600 hover:text-sky-800" to="/register">
            Sign up
          </Link>
        </p>
      </form>
    </CenterContainer>
  );
}

export default LoginForm;
