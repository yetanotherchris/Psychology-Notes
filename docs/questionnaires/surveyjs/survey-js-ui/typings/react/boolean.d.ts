import * as React from "react";
import { QuestionBooleanModel, Base } from "survey-core";
import { SurveyQuestionElementBase } from "./reactquestion_element";
export declare class SurveyQuestionBoolean extends SurveyQuestionElementBase {
    protected checkRef: React.RefObject<HTMLInputElement>;
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): QuestionBooleanModel;
    private doCheck;
    handleOnChange(event: any): void;
    handleOnClick(event: any): void;
    handleOnSwitchClick(event: any): void;
    handleOnLabelClick(event: any, value: boolean): void;
    handleOnKeyDown(event: any): void;
    protected updateDomElement(): void;
    protected renderElement(): JSX.Element;
}
