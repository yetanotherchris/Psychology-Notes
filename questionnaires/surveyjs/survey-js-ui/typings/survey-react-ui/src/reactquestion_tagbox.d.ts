import * as React from "react";
import { QuestionTagboxModel, DropdownListModel } from "survey-core";
import { SurveyQuestionDropdownBase } from "./dropdown-base";
export declare class SurveyQuestionTagbox extends SurveyQuestionDropdownBase<QuestionTagboxModel> {
    constructor(props: any);
    protected renderItem(key: string, item: any): React.JSX.Element;
    protected renderInput(dropdownListModel: DropdownListModel): React.JSX.Element;
    protected renderElement(): React.JSX.Element;
    protected renderReadOnlyElement(): React.JSX.Element | null;
}
