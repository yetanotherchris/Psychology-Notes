/// <reference types="react" />
import { Question, DropdownListModel } from "survey-core";
import { SurveyQuestionUncontrolledElement } from "./reactquestion_element";
export declare class SurveyQuestionDropdownBase<T extends Question> extends SurveyQuestionUncontrolledElement<T> {
    inputElement: HTMLInputElement | null;
    click: (event: any) => void;
    chevronPointerDown: (event: any) => void;
    clear: (event: any) => void;
    keyhandler: (event: any) => void;
    blur: (event: any) => void;
    focus: (event: any) => void;
    protected getStateElement(): any;
    protected setValueCore(newValue: any): void;
    protected getValueCore(): any;
    protected renderReadOnlyElement(): JSX.Element | null;
    protected renderSelect(cssClasses: any): JSX.Element;
    renderValueElement(dropdownListModel: DropdownListModel): JSX.Element | null;
    protected renderInput(dropdownListModel: DropdownListModel): JSX.Element;
    createClearButton(): JSX.Element | null;
    createChevronButton(): JSX.Element | null;
    protected renderOther(cssClasses: any): JSX.Element;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    updateInputDomElement(): void;
}
