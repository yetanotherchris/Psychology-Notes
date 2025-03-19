/// <reference types="react" />
import { IElement } from "survey-core";
import { SurveyElementBase } from "./reactquestion_element";
export declare class SurveyRowElement extends SurveyElementBase<any, any> {
    private rootRef;
    constructor(props: any);
    protected getStateElement(): any;
    private get element();
    private get index();
    private get row();
    private get survey();
    private get creator();
    protected get css(): any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    protected renderElement(): JSX.Element;
    protected createElement(element: IElement, elementIndex?: number): JSX.Element;
}
