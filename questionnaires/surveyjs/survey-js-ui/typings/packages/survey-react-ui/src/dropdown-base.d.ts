import * as React from "react";
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
    protected renderReadOnlyElement(): React.JSX.Element | null;
    protected renderSelect(cssClasses: any): React.JSX.Element;
    renderValueElement(dropdownListModel: DropdownListModel): React.JSX.Element | null;
    protected renderInput(dropdownListModel: DropdownListModel): React.JSX.Element;
    createClearButton(): React.JSX.Element | null;
    createChevronButton(): React.JSX.Element | null;
    protected renderOther(cssClasses: any): React.JSX.Element;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    updateInputDomElement(): void;
}
