/// <reference types="react" />
import { SurveyElementBase } from "../../reactquestion_element";
import { QuestionFileModel } from "survey-core";
export declare class SurveyFilePreview extends SurveyElementBase<{
    question: QuestionFileModel;
}, {}> {
    protected get question(): QuestionFileModel;
    protected renderFileSign(className: string, val: any): JSX.Element | null;
    protected renderElement(): JSX.Element | null;
    protected canRender(): boolean;
}
