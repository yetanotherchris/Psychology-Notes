/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionImageModel } from "survey-core";
export declare class SurveyQuestionImage extends SurveyQuestionElementBase {
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected get question(): QuestionImageModel;
    protected renderElement(): JSX.Element;
}
