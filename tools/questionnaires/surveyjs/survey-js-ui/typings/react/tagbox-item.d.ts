/// <reference types="react" />
import { ReactSurveyElement } from "./reactquestion_element";
import { QuestionTagboxModel, ItemValue } from "survey-core";
export declare class SurveyQuestionTagboxItem extends ReactSurveyElement {
    constructor(props: any);
    protected get question(): QuestionTagboxModel;
    protected get item(): ItemValue;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
}
