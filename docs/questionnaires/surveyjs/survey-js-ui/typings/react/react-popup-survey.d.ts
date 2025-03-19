/// <reference types="react" />
import { Base, PopupSurveyModel } from "survey-core";
import { Survey } from "./reactSurvey";
export declare class PopupSurvey extends Survey {
    protected popup: PopupSurveyModel;
    constructor(props: any);
    protected getStateElements(): Array<Base>;
    handleOnExpanded(event: any): void;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
    protected renderWindowHeader(): JSX.Element;
    protected renderTitleCollapsed(popup: PopupSurveyModel): JSX.Element | null;
    protected renderExpandIcon(): JSX.Element;
    protected renderCollapseIcon(): JSX.Element;
    protected renderCloseButton(popup: PopupSurveyModel): JSX.Element;
    protected renderAllowFullScreenButon(popup: PopupSurveyModel): JSX.Element;
    protected renderBody(): JSX.Element;
    protected createSurvey(newProps: any): void;
}
/**
 * Obsolete. Please use PopupSurvey
 */
export declare class SurveyWindow extends PopupSurvey {
}
