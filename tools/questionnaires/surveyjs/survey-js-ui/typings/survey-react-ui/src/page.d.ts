import * as React from "react";
import { PageModel, PanelModelBase } from "survey-core";
import { SurveyPanelBase } from "./panel-base";
export declare class SurveyPage extends SurveyPanelBase {
    constructor(props: any);
    protected getPanelBase(): PanelModelBase;
    get page(): PageModel;
    protected renderElement(): React.JSX.Element;
    protected renderTitle(): React.JSX.Element;
    protected renderDescription(): React.JSX.Element | null;
}
