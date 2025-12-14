/// <reference types="react" />
import { Base, Action } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IActionBarItemProps {
    item: Action;
}
export declare class SurveyAction extends SurveyElementBase<IActionBarItemProps, any> {
    get item(): Action;
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
}
export declare class SurveyActionBarItem extends SurveyElementBase<IActionBarItemProps, any> {
    get item(): Action;
    protected getStateElement(): Base;
    renderElement(): JSX.Element;
    renderText(): JSX.Element | null;
    renderButtonContent(): JSX.Element;
    renderInnerButton(): JSX.Element;
}
export {};
