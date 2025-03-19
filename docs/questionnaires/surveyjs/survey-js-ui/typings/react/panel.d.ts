/// <reference types="react" />
import { SurveyPanelBase } from "./panel-base";
import { PanelModel } from "survey-core";
export declare class SurveyPanel extends SurveyPanelBase {
    private hasBeenExpanded;
    constructor(props: any);
    get panel(): PanelModel;
    protected renderElement(): JSX.Element;
    protected renderHeader(): JSX.Element | null;
    protected wrapElement(element: JSX.Element): JSX.Element;
    protected renderContent(style: any, rows: JSX.Element[], className: string): JSX.Element;
    protected renderTitle(): JSX.Element | null;
    protected renderDescription(): JSX.Element | null;
    protected renderBottom(): JSX.Element | null;
    protected getIsVisible(): boolean;
}
