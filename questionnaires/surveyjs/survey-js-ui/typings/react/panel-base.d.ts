import * as React from "react";
import { ISurveyCreator } from "./reactquestion";
import { Base, SurveyModel, QuestionRowModel, PanelModelBase } from "survey-core";
import { SurveyElementBase } from "./reactquestion_element";
export declare class SurveyPanelBase extends SurveyElementBase<any, any> {
    protected rootRef: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    protected getStateElement(): Base;
    protected canUsePropInState(key: string): boolean;
    protected get survey(): SurveyModel | null;
    protected get creator(): ISurveyCreator;
    protected get css(): any;
    get panelBase(): PanelModelBase;
    protected getPanelBase(): PanelModelBase;
    protected getSurvey(): SurveyModel | null;
    protected getCss(): any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private doAfterRender;
    protected getIsVisible(): boolean;
    protected canRender(): boolean;
    protected renderRows(css: any): Array<JSX.Element>;
    protected createRow(row: QuestionRowModel, css: any): JSX.Element;
}
