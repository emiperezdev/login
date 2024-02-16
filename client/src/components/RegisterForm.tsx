import { useForm } from "react-hook-form";
import CenterContainer from "./CenterContainer";
import InputField from "./InputField";
import Title from "./Title";
import UserDto from "../entities/UserDto";
import {
  InputAge,
  InputEmail,
  InputName,
  InputPassword,
} from "../entities/InputDto";
import SubmitButton from "./SubmitButton";
import { Link } from "react-router-dom";
import InputErrorMessage from "./InputErrorMessage";
import useErrorResponse from "../stores/useErrorResponse";
import useAddUser from "../hooks/useAddUser";
import ErrorResponse from "./ErrorResponse";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDto>();

  const addUser = useAddUser();

  const onSubmit = handleSubmit((data) => {
    addUser.mutate(data);
  });

  const error = useErrorResponse((s) => s.error);

  return (
    <CenterContainer>
      <form
        onSubmit={onSubmit}
        className="m-5 border p-5 max-w-md rounded-md drop-shadow"
      >
        <Title text="Sign Up" />

        {error && <ErrorResponse message={error} />}

        <InputField inputData={InputName} register={register} />
        {errors.name && <InputErrorMessage message="Name is required" />}

        <InputField inputData={InputEmail} register={register} />
        {errors.email && <InputErrorMessage message="Email is required" />}

        <InputField inputData={InputPassword} register={register} />
        {errors.password && (
          <InputErrorMessage message="Password is required" />
        )}

        <InputField inputData={InputAge} register={register} />
        {errors.age && <InputErrorMessage message="Age is required" />}

        <SubmitButton text="Save" />

        <p className="mt-5 text-slate-600">
          Already an user?{" "}
          <Link className="text-sky-600 hover:text-sky-800" to="/login">
            Login
          </Link>
        </p>
      </form>
    </CenterContainer>
  );
}

export default RegisterForm;
