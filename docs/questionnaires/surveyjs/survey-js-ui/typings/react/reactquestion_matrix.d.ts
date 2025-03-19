/// <reference types="react" />
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionMatrixModel, Base } from "survey-core";
export declare class SurveyQuestionMatrix extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionMatrixModel;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected renderElement(): JSX.Element;
}
export declare class SurveyQuestionMatrixRow extends ReactSurveyElement {
    constructor(props: any);
    protected getStateElement(): Base | null;
    private get question();
    private get row();
    protected wrapCell(cell: any, element: JSX.Element, reason: string): JSX.Element;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
    generateTds(): Array<JSX.Element>;
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
    protected renderElement(): JSX.Element;
    protected renderInput(inputId: string, isChecked: boolean): JSX.Element;
}
