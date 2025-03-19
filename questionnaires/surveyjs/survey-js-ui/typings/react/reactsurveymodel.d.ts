/// <reference types="react" />
import { SurveyModel, QuestionMatrixDropdownRenderedCell, SurveyElement, QuestionRowModel, ItemValue, QuestionSelectBase } from "survey-core";
export declare class ReactSurveyElementsWrapper {
    static wrapRow(survey: SurveyModel, element: JSX.Element, row: QuestionRowModel): JSX.Element;
    static wrapElement(survey: SurveyModel, element: JSX.Element, question: SurveyElement): JSX.Element;
    static wrapQuestionContent(survey: SurveyModel, element: JSX.Element, question: SurveyElement): JSX.Element;
    static wrapItemValue(survey: SurveyModel, element: JSX.Element, question: QuestionSelectBase, item: ItemValue): JSX.Element;
    static wrapMatrixCell(survey: SurveyModel, element: JSX.Element, cell: QuestionMatrixDropdownRenderedCell, reason?: string): JSX.Element;
}
