/// <reference types="react" />
import { Action } from "survey-core";
import { ReactSurveyElement } from "../../reactquestion_element";
export declare class SurveyNavigationButton extends ReactSurveyElement {
    protected get item(): Action;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
}
