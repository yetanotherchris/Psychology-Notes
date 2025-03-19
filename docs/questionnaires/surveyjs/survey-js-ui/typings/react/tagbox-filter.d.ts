/// <reference types="react" />
import { DropdownMultiSelectListModel, QuestionTagboxModel } from "survey-core";
import { SurveyElementBase } from "./reactquestion_element";
interface ITagboxFilterProps {
    model: DropdownMultiSelectListModel;
    question: QuestionTagboxModel;
}
export declare class TagboxFilterString extends SurveyElementBase<ITagboxFilterProps, any> {
    inputElement: HTMLInputElement | null;
    get model(): DropdownMultiSelectListModel;
    get question(): QuestionTagboxModel;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentDidMount(): void;
    updateDomElement(): void;
    onChange(e: any): void;
    keyhandler(e: any): void;
    onBlur(e: any): void;
    onFocus(e: any): void;
    constructor(props: any);
    getStateElement(): DropdownMultiSelectListModel;
    render(): JSX.Element;
}
export {};
