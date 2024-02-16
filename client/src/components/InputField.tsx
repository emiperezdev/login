import { UseFormRegister } from "react-hook-form";
import { InputDto } from "../entities/InputDto";

interface Props {
  inputData: InputDto;
  register: UseFormRegister<any>;
}

function InputField({ inputData, register }: Props) {
  return (
    <input
      {...register(inputData.name, {
        required: true,
        valueAsNumber: inputData.type === "number" ? true : false,
      })}
      className="w-full bg-slate-100 p-3 my-3 border rounded-lg"
      type={inputData.type}
      placeholder={inputData.placeholder}
    />
  );
}

export default InputField;
