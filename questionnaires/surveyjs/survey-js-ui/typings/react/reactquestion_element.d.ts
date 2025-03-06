import * as React from "react";
import { Base, PanelModel, LocalizableString, Question } from "survey-core";
import { ISurveyCreator } from "./reactquestion";
export declare class SurveyElementBase<P, S> extends React.Component<P, S> {
    static renderLocString(locStr: LocalizableString, style?: any, key?: string): JSX.Element;
    static renderQuestionDescription(question: Question | PanelModel): JSX.Element;
    private changedStatePropNameValue;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private _allowComponentUpdate;
    protected allowComponentUpdate(): void;
    protected denyComponentUpdate(): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    render(): JSX.Element | null;
    protected wrapElement(element: JSX.Element): JSX.Element;
    protected get isRendering(): boolean;
    protected getRenderedElements(): Base[];
    private startEndRendering;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element | null;
    protected get changedStatePropName(): string | undefined;
    private makeBaseElementsReact;
    private unMakeBaseElementsReact;
    protected getStateElements(): Array<Base>;
    protected getStateElement(): Base | null;
    protected get isDisplayMode(): boolean;
    protected renderLocString(locStr: LocalizableString, style?: any, key?: string): JSX.Element;
    private canMakeReact;
    private makeBaseElementReact;
    protected canUsePropInState(key: string): boolean;
    private unMakeBaseElementReact;
}
export declare class ReactSurveyElement extends SurveyElementBase<any, any> {
    constructor(props: any);
    protected get cssClasses(): any;
}
export declare class SurveyQuestionElementBase extends SurveyElementBase<any, any> {
    control: HTMLElement;
    content: HTMLElement;
    constructor(props: any);
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    protected updateDomElement(): void;
    protected get questionBase(): Question;
    protected getRenderedElements(): Base[];
    protected get creator(): ISurveyCreator;
    protected canRender(): boolean;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    protected get isDisplayMode(): boolean;
    protected wrapCell(cell: any, element: JSX.Element, reason: string): JSX.Element;
    setControl(element: HTMLElement | null): void;
    setContent(element: HTMLElement | null): void;
}
export declare class SurveyQuestionUncontrolledElement<T extends Question> extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): T;
    updateValueOnEvent: (event: any) => void;
    protected setValueCore(newValue: any): void;
    protected getValueCore(): any;
    protected updateDomElement(): void;
    private getValue;
}
