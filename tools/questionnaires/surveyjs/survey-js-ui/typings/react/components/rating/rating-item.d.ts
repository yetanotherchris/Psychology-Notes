/// <reference types="react" />
import { Base, QuestionRatingModel, RenderedRatingItem } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
export interface IRatingItemProps {
    question: QuestionRatingModel;
    item: RenderedRatingItem;
    index: any;
    handleOnClick: any;
    isDisplayMode: boolean;
}
export declare class RatingItemBase extends SurveyElementBase<IRatingItemProps, any> {
    constructor(props: any);
    get question(): QuestionRatingModel;
    get item(): RenderedRatingItem;
    get index(): any;
    getStateElement(): Base;
    handleOnMouseDown(event: any): void;
}
export declare class RatingItem extends RatingItemBase {
    render(): JSX.Element | null;
    componentDidMount(): void;
}
