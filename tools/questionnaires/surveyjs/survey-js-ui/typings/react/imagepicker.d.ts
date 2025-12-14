/// <reference types="react" />
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionImagePickerModel, ImageItemValue } from "survey-core";
export declare class SurveyQuestionImagePicker extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionImagePickerModel;
    protected renderElement(): JSX.Element;
    protected getColumns(cssClasses: any): JSX.Element[];
    protected getItems(cssClasses: any): Array<any>;
    protected get textStyle(): any;
    protected renderItem(key: string, item: ImageItemValue, cssClasses: any): JSX.Element;
}
export declare class SurveyQuestionImagePickerItem extends ReactSurveyElement {
    constructor(props: any);
    protected getStateElement(): any;
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private reactOnStrChanged;
    protected get cssClasses(): any;
    protected get item(): any;
    protected get question(): any;
    handleOnChange(event: any): void;
    protected renderElement(): JSX.Element;
}
