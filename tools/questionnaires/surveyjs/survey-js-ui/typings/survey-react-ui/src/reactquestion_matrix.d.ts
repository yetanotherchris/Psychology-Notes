import * as React from "react";
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionMatrixModel, Base } from "survey-core";
export declare class SurveyQuestionMatrix extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionMatrixModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected renderElement(): React.JSX.Element;
}
export declare class SurveyQuestionMatrixRow extends ReactSurveyElement {
    constructor(props: any);
    protected getStateElement(): Base | null;
    private get question();
    private get row();
    protected wrapCell(cell: any, element: React.JSX.Element, reason: string): React.JSX.Element;
    protected canRender(): boolean;
    protected renderElement(): React.JSX.Element;
    generateTds(): Array<React.JSX.Element>;
    cellClick(row: any, column: any): void;
}
export declare class SurveyQuestionMatrixCell extends ReactSurveyElement {
    constructor(props: any);
    handleOnChange(event: any): void;
    handleOnMouseDown(event: any): void;
    private get question();
    private get row();
    private get column();
    private get columnIndex();
    protected canRender(): boolean;
    protected renderElement(): React.JSX.Element;
    protected renderInput(inputId: string, isChecked: boolean): React.JSX.Element;
}
