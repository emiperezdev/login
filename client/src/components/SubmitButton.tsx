interface Props {
  text: string;
}

function SubmitButton({text}: Props) {
  return (
    <div className="flex justify-center mt-3">
      <button
        type="submit"
        className="p-3 bg-sky-500 text-white rounded-lg hover:text-slate-200 text-lg"
      >
        {text}
      </button>
    </div>
  );
}

export default SubmitButton;
