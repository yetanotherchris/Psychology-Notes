/// <reference types="react" />
import { ReactSurveyElement } from "../../reactquestion_element";
import { QuestionFileModel } from "survey-core";
export declare class SurveyFileChooseButton extends ReactSurveyElement {
    constructor(props: any);
    protected get question(): QuestionFileModel;
    render(): JSX.Element;
}
