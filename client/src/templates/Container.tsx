import { IContainerProps } from "../interfaces";

const Container = ({ children }: IContainerProps) => (
  <div className="appContainer h-full flex flex-col">
    {children}
  </div>
);

export default Container;
