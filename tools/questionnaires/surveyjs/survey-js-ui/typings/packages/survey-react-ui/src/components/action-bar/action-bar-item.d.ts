import React from "react";
import { Base, Action } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IActionBarItemProps {
    item: Action;
}
export declare class SurveyAction extends SurveyElementBase<IActionBarItemProps, any> {
    get item(): Action;
    protected getStateElement(): Base;
    renderElement(): React.JSX.Element;
}
export declare class SurveyActionBarItem extends SurveyElementBase<IActionBarItemProps, any> {
    get item(): Action;
    protected getStateElement(): Base;
    renderElement(): React.JSX.Element;
    renderText(): React.JSX.Element;
    renderButtonContent(): React.JSX.Element;
    renderInnerButton(): React.JSX.Element;
}
export {};
