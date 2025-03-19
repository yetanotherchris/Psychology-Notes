/// <reference types="react" />
import { QuestionPanelDynamicModel } from "survey-core";
import { ReactSurveyElement } from "../../reactquestion_element";
export declare class SurveyQuestionPanelDynamicAction extends ReactSurveyElement {
    constructor(props: any);
    protected get data(): any;
    protected get question(): QuestionPanelDynamicModel;
}
export declare class SurveyQuestionPanelDynamicAddButton extends SurveyQuestionPanelDynamicAction {
    protected handleClick: (event: any) => void;
    protected renderElement(): JSX.Element | null;
}
