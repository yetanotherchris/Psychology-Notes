/// <reference types="react" />
import { Action } from "survey-core";
import { ReactSurveyElement } from "../../../reactquestion_element";
export declare class SurveyQuestionMatrixDetailButton extends ReactSurveyElement {
    constructor(props: any);
    protected getStateElement(): any;
    get item(): Action;
    private get question();
    private get row();
    handleOnShowHideClick(event: any): void;
    protected renderElement(): JSX.Element;
}
