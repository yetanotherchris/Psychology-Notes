/// <reference types="react" />
import { SurveyQuestionElementBase } from "./reactquestion_element";
import { SurveyQuestionAndErrorsWrapped } from "./reactquestion";
import { QuestionMultipleTextModel, MultipleTextItemModel, MultipleTextCell } from "survey-core";
import { ReactSurveyElement } from "./reactquestion_element";
export declare class SurveyQuestionMultipleText extends SurveyQuestionElementBase {
    constructor(props: any);
    protected get question(): QuestionMultipleTextModel;
    protected renderElement(): JSX.Element;
    protected renderCell(cell: MultipleTextCell, cssClasses: any, index: number): JSX.Element;
    protected renderRow(rowIndex: number, cells: Array<MultipleTextCell>, cssClasses: any): JSX.Element;
}
export declare class SurveyMultipleTextItem extends ReactSurveyElement {
    private get question();
    private get item();
    protected getStateElements(): (MultipleTextItemModel | import("survey-core").MultipleTextEditorModel)[];
    private get creator();
    protected renderElement(): JSX.Element;
}
export declare class SurveyMultipleTextItemEditor extends SurveyQuestionAndErrorsWrapped {
    protected renderElement(): JSX.Element;
}
