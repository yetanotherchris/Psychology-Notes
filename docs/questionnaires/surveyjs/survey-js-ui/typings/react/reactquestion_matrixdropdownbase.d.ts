/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { SurveyQuestionAndErrorsCell } from "./reactquestion";
import { QuestionMatrixDropdownModelBase, Question } from "survey-core";
export declare class SurveyQuestionMatrixDropdownBase extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionMatrixDropdownModelBase;
    private getState;
    private updateStateOnCallback;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected renderElement(): JSX.Element;
    renderTableDiv(): JSX.Element;
}
export declare class SurveyQuestionMatrixDropdownCell extends SurveyQuestionAndErrorsCell {
    constructor(props: any);
    private get cell();
    protected get itemCss(): string;
    protected getQuestion(): Question | any;
    protected doAfterRender(): void;
    protected getShowErrors(): boolean;
    protected getCellStyle(): any;
    protected getHeaderText(): string;
    protected renderCellContent(): JSX.Element;
    protected renderQuestion(): JSX.Element;
    private renderOtherComment;
    private renderCellCheckboxButton;
    private renderCellRadiogroupButton;
}
