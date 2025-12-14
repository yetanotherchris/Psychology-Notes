/// <reference types="react" />
import { ReactSurveyElement, SurveyQuestionElementBase } from "./reactquestion_element";
import { QuestionRankingModel, ItemValue } from "survey-core";
export declare class SurveyQuestionRanking extends SurveyQuestionElementBase {
    protected get question(): QuestionRankingModel;
    protected renderElement(): JSX.Element;
    protected getItems(choices?: any, unrankedItem?: boolean): Array<any>;
    protected renderItem(item: ItemValue, i: number, handleKeydown: (event: any) => void, handlePointerDown: (event: PointerEvent) => void, handlePointerUp: (event: PointerEvent) => void, cssClasses: any, itemClass: string, question: QuestionRankingModel, unrankedItem?: boolean): JSX.Element;
}
export declare class SurveyQuestionRankingItem extends ReactSurveyElement {
    protected get text(): string;
    protected get index(): string;
    protected get indexText(): string;
    protected get handleKeydown(): (event: any) => void;
    protected get handlePointerDown(): (event: any) => void;
    protected get handlePointerUp(): (event: any) => void;
    protected get cssClasses(): any;
    protected get itemClass(): string;
    protected get itemTabIndex(): number;
    protected get question(): any;
    protected get unrankedItem(): any;
    protected get item(): any;
    protected renderEmptyIcon(): JSX.Element;
    protected renderElement(): JSX.Element;
}
export declare class SurveyQuestionRankingItemContent extends ReactSurveyElement {
    protected get item(): ItemValue;
    protected get cssClasses(): any;
    protected renderElement(): JSX.Element;
}
