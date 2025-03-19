import React from "react";
import { SurveyModel } from "survey-core";
interface ISurveyHeaderProps {
    survey: SurveyModel;
}
export declare class SurveyHeader extends React.Component<ISurveyHeaderProps, any> {
    constructor(props: ISurveyHeaderProps);
    private get survey();
    private get css();
    private rootRef;
    componentDidMount(): void;
    componentWillUnmount(): void;
    private renderTitle;
    private renderLogoImage;
    render(): JSX.Element | null;
}
export {};
