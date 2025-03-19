/// <reference types="react" />
import { ReactSurveyElement, SurveyQuestionUncontrolledElement } from "./reactquestion_element";
import { QuestionCommentModel } from "survey-core";
export declare class SurveyQuestionComment extends SurveyQuestionUncontrolledElement<QuestionCommentModel> {
    constructor(props: any);
    protected renderElement(): JSX.Element;
}
export declare class SurveyQuestionCommentItem extends ReactSurveyElement {
    private control;
    constructor(props: any);
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    protected updateDomElement(): void;
    protected setControl(element: HTMLElement | null): void;
    protected canRender(): boolean;
    protected onCommentChange(event: any): void;
    protected onCommentInput(event: any): void;
    protected getComment(): string;
    protected setComment(value: any): void;
    protected getId(): string;
    protected getPlaceholder(): string;
    protected renderElement(): JSX.Element;
}
export declare class SurveyQuestionOtherValueItem extends SurveyQuestionCommentItem {
    protected onCommentChange(event: any): void;
    protected onCommentInput(event: any): void;
    protected getComment(): string;
    protected setComment(value: any): void;
    protected getId(): string;
    protected getPlaceholder(): string;
}
