interface Props {
  message: string;
}

function ErrorResponse({ message }: Props) {
  return <p className="text-white bg-red-600 p-3 rounded-md">{message}</p>;
}

export default ErrorResponse;
