/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { SurveyElementBase } from "./reactquestion_element";
import { QuestionButtonGroupModel, ButtonGroupItemValue, ButtonGroupItemModel } from "survey-core";
export declare class SurveyQuestionButtonGroup extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionButtonGroupModel;
    getStateElement(): QuestionButtonGroupModel;
    renderElement(): JSX.Element;
    renderItems(): JSX.Element[];
}
export declare class SurveyButtonGroupItem extends SurveyElementBase<any, any> {
    model: ButtonGroupItemModel;
    constructor(props: any);
    get index(): number;
    get question(): QuestionButtonGroupModel;
    get item(): ButtonGroupItemValue;
    getStateElement(): ButtonGroupItemValue;
    renderElement(): JSX.Element;
    protected renderIcon(): JSX.Element | null;
    protected renderInput(): JSX.Element;
    protected renderCaption(): JSX.Element | null;
}
