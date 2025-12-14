/// <reference types="react" />
import { PageModel, PanelModelBase } from "survey-core";
import { SurveyPanelBase } from "./panel-base";
export declare class SurveyPage extends SurveyPanelBase {
    constructor(props: any);
    protected getPanelBase(): PanelModelBase;
    get page(): PageModel;
    protected renderElement(): JSX.Element;
    protected renderTitle(): JSX.Element;
    protected renderDescription(): JSX.Element | null;
}
