import * as React from "react";
import { SurveyModel } from "survey-core";
export declare class SurveyNavigationBase extends React.Component<any, any> {
    constructor(props: any);
    protected get survey(): SurveyModel;
    protected get css(): any;
    private updateStateFunction;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
