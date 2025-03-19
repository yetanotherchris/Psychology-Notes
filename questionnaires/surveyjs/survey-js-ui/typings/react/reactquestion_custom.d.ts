/// <reference types="react" />
import { SurveyQuestionUncontrolledElement } from "./reactquestion_element";
import { Base, QuestionCustomModel, QuestionCompositeModel } from "survey-core";
export declare class SurveyQuestionCustom extends SurveyQuestionUncontrolledElement<QuestionCustomModel> {
    constructor(props: any);
    protected getStateElements(): Array<Base>;
    protected renderElement(): JSX.Element;
}
export declare class SurveyQuestionComposite extends SurveyQuestionUncontrolledElement<QuestionCompositeModel> {
    constructor(props: any);
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
}
