import * as React from "react";
import { SurveyQuestionElementBase } from "./reactquestion_element";
export declare class SurveyCustomWidget extends SurveyQuestionElementBase {
    private widgetRef;
    constructor(props: any);
    private _afterRender;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    protected canRender(): boolean;
    protected renderElement(): React.JSX.Element;
}
