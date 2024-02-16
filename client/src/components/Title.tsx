interface Props {
  text: string;
}

function Title({ text }: Props) {
  return <h1 className="text-4xl font-bold text-center mb-5">{text}</h1>;
}

export default Title;
