/// <reference types="react" />
import { IElement, Base } from "survey-core";
import { SurveyElementBase } from "./reactquestion_element";
export declare class SurveyRow extends SurveyElementBase<any, any> {
    private rootRef;
    constructor(props: any);
    private recalculateCss;
    protected getStateElement(): Base;
    private get row();
    private get survey();
    private get creator();
    protected get css(): any;
    protected canRender(): boolean;
    protected renderElementContent(): JSX.Element;
    protected renderElement(): JSX.Element;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    private stopLazyRendering;
    componentWillUnmount(): void;
    protected createElement(element: IElement, elementIndex?: number): JSX.Element;
}
