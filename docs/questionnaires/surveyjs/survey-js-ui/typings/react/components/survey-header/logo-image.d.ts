import React from "react";
import { SurveyModel } from "survey-core";
interface ILogoImageProps {
    data: SurveyModel;
}
export declare class LogoImage extends React.Component<ILogoImageProps, any> {
    constructor(props: ILogoImageProps);
    private get survey();
    render(): JSX.Element;
}
export {};
