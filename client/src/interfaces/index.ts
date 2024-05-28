import { ReactNode } from "react";

export interface IContainerProps { children: ReactNode };
export interface IConvertInfoToMailProps {
    userName: string,
    email: string,
    projectInfo: string
}