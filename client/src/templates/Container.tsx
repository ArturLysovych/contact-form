import { ReactNode } from "react";

interface ContainerProps { children: ReactNode };

const Container = ({ children }: ContainerProps) => (
  <div className="appContainer h-full flex flex-col">
    {children}
  </div>
);

export default Container;
