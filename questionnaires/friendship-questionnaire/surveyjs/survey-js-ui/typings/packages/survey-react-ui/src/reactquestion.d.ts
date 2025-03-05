import * as React from "react";
import { Base, SurveyElement, SurveyError, Question, QuestionMatrixDropdownRenderedCell } from "survey-core";
import { SurveyElementBase, ReactSurveyElement } from "./reactquestion_element";
export interface ISurveyCreator {
    createQuestionElement(question: Question): React.JSX.Element | null;
    renderError(key: string, error: SurveyError, cssClasses: any, element?: any): React.JSX.Element;
    questionTitleLocation(): string;
    questionErrorLocation(): string;
}
export declare class SurveyQuestion extends SurveyElementBase<any, any> {
    private isNeedFocus;
    static renderQuestionBody(creator: ISurveyCreator, question: Question): React.JSX.Element | any;
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
    protected renderQuestionContent(): React.JSX.Element;
    protected renderElement(): React.JSX.Element;
    protected wrapElement(element: React.JSX.Element): React.JSX.Element;
    protected wrapQuestionContent(element: React.JSX.Element): React.JSX.Element;
    protected renderQuestion(): React.JSX.Element;
    protected renderDescription(): React.JSX.Element;
    protected renderComment(cssClasses: any): React.JSX.Element;
    protected renderHeader(question: Question): React.JSX.Element;
    protected renderErrors(cssClasses: any, location: string): React.JSX.Element;
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
    protected renderElement(): React.JSX.Element;
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
    protected renderContent(): React.JSX.Element;
    protected abstract renderElement(): React.JSX.Element;
    protected getShowErrors(): boolean;
    protected renderQuestion(): React.JSX.Element;
}
export declare class SurveyQuestionAndErrorsCell extends SurveyQuestionAndErrorsWrapped {
    [index: string]: any;
    protected cellRef: React.RefObject<HTMLTableCellElement>;
    constructor(props: any);
    componentWillUnmount(): void;
    protected renderCellContent(): React.JSX.Element;
    protected renderElement(): React.JSX.Element;
    protected getCellStyle(): any;
    protected getHeaderText(): string;
    protected wrapCell(cell: QuestionMatrixDropdownRenderedCell, element: React.JSX.Element): React.JSX.Element;
}
export declare class SurveyQuestionErrorCell extends React.Component<any, any> {
    constructor(props: any);
    private get question();
    private update;
    protected getQuestionPropertiesToTrack(): string[];
    private registerCallback;
    private unRegisterCallback;
    componentDidUpdate(prevProps: Readonly<any>): void;
    componentWillUnmount(): void;
    render(): React.JSX.Element;
}
