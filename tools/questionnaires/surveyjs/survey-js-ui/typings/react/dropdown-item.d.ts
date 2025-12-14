/// <reference types="react" />
import { ReactSurveyElement } from "./reactquestion_element";
import { Base } from "survey-core";
export declare class SurveyQuestionOptionItem extends ReactSurveyElement {
    constructor(props: any);
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    private setupModel;
    protected getStateElement(): Base;
    private get item();
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
}
