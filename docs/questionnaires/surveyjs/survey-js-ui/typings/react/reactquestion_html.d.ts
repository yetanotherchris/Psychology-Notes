/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionHtmlModel } from "survey-core";
export declare class SurveyQuestionHtml extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionHtmlModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private reactOnStrChanged;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
}
