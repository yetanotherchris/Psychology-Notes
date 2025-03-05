/// <reference types="react" />
import { SurveyModel, QuestionMatrixDropdownRenderedCell, SurveyElement, QuestionRowModel, ItemValue, QuestionSelectBase } from "survey-core";
export declare class ReactSurveyElementsWrapper {
    static wrapRow(survey: SurveyModel, element: React.JSX.Element, row: QuestionRowModel): React.JSX.Element;
    static wrapElement(survey: SurveyModel, element: React.JSX.Element, question: SurveyElement): React.JSX.Element;
    static wrapQuestionContent(survey: SurveyModel, element: React.JSX.Element, question: SurveyElement): React.JSX.Element;
    static wrapItemValue(survey: SurveyModel, element: React.JSX.Element, question: QuestionSelectBase, item: ItemValue): React.JSX.Element;
    static wrapMatrixCell(survey: SurveyModel, element: React.JSX.Element, cell: QuestionMatrixDropdownRenderedCell, reason?: string): React.JSX.Element;
}
