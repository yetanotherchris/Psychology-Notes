import * as React from "react";
import { Base, SurveyElement, SurveyError, Question, QuestionMatrixDropdownRenderedCell } from "survey-core";
import { SurveyElementBase, ReactSurveyElement } from "./reactquestion_element";
export interface ISurveyCreator {
    createQuestionElement(question: Question): JSX.Element | null;
    renderError(key: string, error: SurveyError, cssClasses: any, element?: any): JSX.Element;
    questionTitleLocation(): string;
    questionErrorLocation(): string;
}
export declare class SurveyQuestion extends SurveyElementBase<any, any> {
    private isNeedFocus;
    static renderQuestionBody(creator: ISurveyCreator, question: Question): JSX.Element | any;
    private rootRef;
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): Question;
    private get creator();
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private doAfterRender;
    protected canRender(): boolean;
    protected renderQuestionContent(): JSX.Element;
    protected renderElement(): JSX.Element;
    protected wrapElement(element: JSX.Element): JSX.Element;
    protected wrapQuestionContent(element: JSX.Element): JSX.Element;
    protected renderQuestion(): JSX.Element;
    protected renderDescription(): JSX.Element;
    protected renderComment(cssClasses: any): JSX.Element;
    protected renderHeader(question: Question): JSX.Element;
    protected renderErrors(cssClasses: any, location: string): JSX.Element;
}
export declare class SurveyElementErrors extends ReactSurveyElement {
    constructor(props: any);
    protected get id(): string;
    protected get element(): SurveyElement;
    private get creator();
    protected get location(): string;
    private getState;
    protected canRender(): boolean;
    componentWillUnmount(): void;
    protected renderElement(): JSX.Element;
}
export declare abstract class SurveyQuestionAndErrorsWrapped extends ReactSurveyElement {
    [index: string]: any;
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): Question;
    protected get creator(): ISurveyCreator;
    protected getQuestion(): Question;
    protected get itemCss(): string;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    protected doAfterRender(): void;
    protected canRender(): boolean;
    protected renderContent(): JSX.Element;
    protected abstract renderElement(): JSX.Element;
    protected getShowErrors(): boolean;
    protected renderQuestion(): JSX.Element;
}
export declare class SurveyQuestionAndErrorsCell extends SurveyQuestionAndErrorsWrapped {
    [index: string]: any;
    protected cellRef: React.RefObject<HTMLTableCellElement>;
    constructor(props: any);
    componentWillUnmount(): void;
    protected renderCellContent(): JSX.Element;
    protected renderElement(): JSX.Element;
    protected getCellStyle(): any;
    protected getHeaderText(): string;
    protected wrapCell(cell: QuestionMatrixDropdownRenderedCell, element: JSX.Element): JSX.Element;
}
export declare class SurveyQuestionErrorCell extends React.Component<any, any> {
    constructor(props: any);
    private get question();
    private update;
    private registerCallback;
    private unRegisterCallback;
    componentDidUpdate(prevProps: Readonly<any>): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
