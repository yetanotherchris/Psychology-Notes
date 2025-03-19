/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionSignaturePadModel } from "survey-core";
export declare class SurveyQuestionSignaturePad extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionSignaturePadModel;
    protected renderElement(): JSX.Element;
    renderBackgroundImage(): JSX.Element | null;
    protected renderLoadingIndicator(): JSX.Element;
    renderCleanButton(): JSX.Element | null;
}
