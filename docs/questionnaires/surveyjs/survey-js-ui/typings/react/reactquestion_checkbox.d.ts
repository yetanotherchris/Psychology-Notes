/// <reference types="react" />
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { Base, ItemValue, QuestionCheckboxModel } from "survey-core";
export declare class SurveyQuestionCheckbox extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionCheckboxModel;
    protected renderElement(): JSX.Element;
    protected getHeader(): JSX.Element[] | undefined;
    protected getFooter(): JSX.Element[] | undefined;
    protected getColumnedBody(cssClasses: any): JSX.Element;
    protected getColumns(cssClasses: any): JSX.Element[];
    protected getBody(cssClasses: any): JSX.Element;
    protected getItems(cssClasses: any, choices: Array<ItemValue>): Array<any>;
    protected get textStyle(): any;
    protected renderOther(): JSX.Element;
    protected renderItem(key: string, item: any, isFirst: boolean, cssClasses: any, index?: string): JSX.Element;
}
export declare class SurveyQuestionCheckboxItem extends ReactSurveyElement {
    constructor(props: any);
    protected getStateElement(): Base;
    protected get question(): QuestionCheckboxModel;
    protected get item(): ItemValue;
    protected get textStyle(): any;
    protected get isFirst(): any;
    protected get index(): number;
    private get hideCaption();
    shouldComponentUpdate(nextProps: any, nextState: any): boolean;
    handleOnChange: (event: any) => void;
    protected canRender(): boolean;
    protected renderElement(): JSX.Element;
    protected get inputStyle(): any;
    protected renderCheckbox(isChecked: boolean, otherItem: JSX.Element | null): JSX.Element;
}
