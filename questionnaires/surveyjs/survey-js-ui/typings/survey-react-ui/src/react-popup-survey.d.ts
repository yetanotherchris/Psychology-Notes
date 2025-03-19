import * as React from "react";
import { Base, PopupSurveyModel } from "survey-core";
import { Survey } from "./reactSurvey";
export declare class PopupSurvey extends Survey {
    protected popup: PopupSurveyModel;
    constructor(props: any);
    protected getStateElements(): Array<Base>;
    handleOnExpanded(event: any): void;
    protected canRender(): boolean;
    protected renderElement(): React.JSX.Element;
    protected renderWindowHeader(): React.JSX.Element;
    protected renderTitleCollapsed(popup: PopupSurveyModel): React.JSX.Element | null;
    protected renderExpandIcon(): React.JSX.Element;
    protected renderCollapseIcon(): React.JSX.Element;
    protected renderCloseButton(popup: PopupSurveyModel): React.JSX.Element;
    protected renderAllowFullScreenButon(popup: PopupSurveyModel): React.JSX.Element;
    protected renderBody(): React.JSX.Element;
    protected createSurvey(newProps: any): void;
}
/**
 * @deprecated Use `PopupSurvey` instead.
 */
export declare class SurveyWindow extends PopupSurvey {
}
