/// <reference types="react" />
import { QuestionFileModel } from "survey-core";
import { SurveyQuestionElementBase } from "./reactquestion_element";
export declare class SurveyQuestionFile extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionFileModel;
    protected renderElement(): JSX.Element;
    protected renderFileDecorator(): JSX.Element;
    protected renderChooseButton(): JSX.Element;
    protected renderClearButton(className: string): JSX.Element | null;
    protected renderPreview(): JSX.Element;
    protected renderLoadingIndicator(): JSX.Element;
    protected renderVideo(): JSX.Element;
}
