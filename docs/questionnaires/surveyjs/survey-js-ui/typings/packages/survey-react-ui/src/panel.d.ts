import * as React from "react";
import { SurveyPanelBase } from "./panel-base";
import { PanelModel } from "survey-core";
export declare class SurveyPanel extends SurveyPanelBase {
    private hasBeenExpanded;
    constructor(props: any);
    get panel(): PanelModel;
    protected renderElement(): React.JSX.Element;
    protected renderHeader(): React.JSX.Element;
    protected wrapElement(element: React.JSX.Element): React.JSX.Element;
    protected renderContent(style: any, rows: React.JSX.Element[], className: string): React.JSX.Element;
    protected renderTitle(): React.JSX.Element | null;
    protected renderDescription(): React.JSX.Element | null;
    protected renderBottom(): React.JSX.Element | null;
    protected getIsVisible(): boolean;
}
