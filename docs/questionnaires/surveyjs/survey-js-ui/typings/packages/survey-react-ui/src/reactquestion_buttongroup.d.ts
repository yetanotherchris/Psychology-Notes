import { SurveyQuestionElementBase } from "./reactquestion_element";
import React from "react";
import { SurveyElementBase } from "./reactquestion_element";
import { QuestionButtonGroupModel, ButtonGroupItemValue, ButtonGroupItemModel } from "survey-core";
export declare class SurveyQuestionButtonGroup extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionButtonGroupModel;
    getStateElement(): QuestionButtonGroupModel;
    renderElement(): React.JSX.Element;
    renderItems(): React.JSX.Element[];
}
export declare class SurveyButtonGroupItem extends SurveyElementBase<any, any> {
    model: ButtonGroupItemModel;
    constructor(props: any);
    get index(): number;
    get question(): QuestionButtonGroupModel;
    get item(): ButtonGroupItemValue;
    getStateElement(): ButtonGroupItemValue;
    renderElement(): React.JSX.Element;
    protected renderIcon(): React.JSX.Element;
    protected renderInput(): React.JSX.Element;
    protected renderCaption(): React.JSX.Element;
}
