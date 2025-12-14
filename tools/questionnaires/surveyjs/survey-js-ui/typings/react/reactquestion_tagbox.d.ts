/// <reference types="react" />
import { QuestionTagboxModel, DropdownListModel } from "survey-core";
import { SurveyQuestionDropdownBase } from "./dropdown-base";
export declare class SurveyQuestionTagbox extends SurveyQuestionDropdownBase<QuestionTagboxModel> {
    constructor(props: any);
    protected renderItem(key: string, item: any): JSX.Element;
    protected renderInput(dropdownListModel: DropdownListModel): JSX.Element;
    protected renderElement(): JSX.Element;
    protected renderReadOnlyElement(): JSX.Element | null;
}
