import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function CenterContainer({ children }: Props) {
  return (
    <section className="h-[calc(100vh-100px)] flex items-center justify-center">
      {children}
    </section>
  );
}

export default CenterContainer;
