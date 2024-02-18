import { PropsWithChildren } from "react";

const AccentText = ({ children }: PropsWithChildren) => {
  return (
    <span className="bg-gradient-to-r from-accentYellow  to-red bg-clip-text text-transparent">
      {children}
    </span>
  );
};

export default AccentText;
