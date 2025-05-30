/// <reference types="react" />
import { Base, Question, PageModel, SurveyError, SurveyModel, IAttachKey2clickOptions } from "survey-core";
import { ISurveyCreator } from "./reactquestion";
import { SurveyElementBase } from "./reactquestion_element";
export declare class Survey extends SurveyElementBase<any, any> implements ISurveyCreator {
    private previousJSON;
    private rootRef;
    static get cssType(): string;
    static set cssType(value: string);
    protected survey: SurveyModel;
    private rootNodeId;
    private rootNodeClassName;
    constructor(props: any);
    protected getStateElement(): Base;
    private isSurveyUpdated;
    private onSurveyUpdated;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    destroySurvey(): void;
    componentWillUnmount(): void;
    doRender(): JSX.Element;
    protected renderElement(): JSX.Element;
    get css(): any;
    set css(value: any);
    protected renderCompleted(): JSX.Element | null;
    protected renderCompletedBefore(): JSX.Element;
    protected renderLoading(): JSX.Element;
    protected renderSurvey(): JSX.Element;
    protected renderPage(page: PageModel): JSX.Element;
    protected renderEmptySurvey(): JSX.Element;
    protected createSurvey(newProps: any): void;
    private isModelJSONChanged;
    protected updateSurvey(newProps: any, oldProps?: any): void;
    protected setSurveyEvents(): void;
    createQuestionElement(question: Question): JSX.Element | null;
    renderError(key: string, error: SurveyError, cssClasses: any, element?: any): JSX.Element;
    questionTitleLocation(): string;
    questionErrorLocation(): string;
}
export declare function attachKey2click(element: JSX.Element, viewModel?: any, options?: IAttachKey2clickOptions): JSX.Element;
