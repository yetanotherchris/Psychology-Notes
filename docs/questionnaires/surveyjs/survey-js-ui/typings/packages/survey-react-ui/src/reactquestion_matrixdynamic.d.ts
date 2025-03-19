import * as React from "react";
import { SurveyQuestionMatrixDropdownBase } from "./reactquestion_matrixdropdownbase";
import { QuestionMatrixDynamicModel } from "survey-core";
import { ReactSurveyElement } from "./reactquestion_element";
export declare class SurveyQuestionMatrixDynamic extends SurveyQuestionMatrixDropdownBase {
    constructor(props: any);
    protected get matrix(): QuestionMatrixDynamicModel;
    handleOnRowAddClick(event: any): void;
    protected renderElement(): React.JSX.Element;
    protected renderAddRowButtonOnTop(cssClasses: any): React.JSX.Element | null;
    protected renderAddRowButtonOnBottom(cssClasses: any): React.JSX.Element | null;
    protected renderNoRowsContent(cssClasses: any): React.JSX.Element;
    protected renderAddRowButton(cssClasses: any, isEmptySection?: boolean): React.JSX.Element;
}
export declare class SurveyQuestionMatrixDynamicAddButton extends ReactSurveyElement {
    constructor(props: any);
    protected get matrix(): QuestionMatrixDynamicModel;
    handleOnRowAddClick(event: any): void;
    protected renderElement(): React.JSX.Element;
}
