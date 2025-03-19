/// <reference types="react" />
import { SurveyQuestionMatrixDropdownBase } from "./reactquestion_matrixdropdownbase";
import { QuestionMatrixDynamicModel } from "survey-core";
import { ReactSurveyElement } from "./reactquestion_element";
export declare class SurveyQuestionMatrixDynamic extends SurveyQuestionMatrixDropdownBase {
    constructor(props: any);
    protected get matrix(): QuestionMatrixDynamicModel;
    handleOnRowAddClick(event: any): void;
    protected renderElement(): JSX.Element;
    protected renderAddRowButtonOnTop(cssClasses: any): JSX.Element | null;
    protected renderAddRowButtonOnBottom(cssClasses: any): JSX.Element | null;
    protected renderNoRowsContent(cssClasses: any): JSX.Element;
    protected renderAddRowButton(cssClasses: any, isEmptySection?: boolean): JSX.Element;
}
export declare class SurveyQuestionMatrixDynamicAddButton extends ReactSurveyElement {
    constructor(props: any);
    protected get matrix(): QuestionMatrixDynamicModel;
    handleOnRowAddClick(event: any): void;
    protected renderElement(): JSX.Element;
}
