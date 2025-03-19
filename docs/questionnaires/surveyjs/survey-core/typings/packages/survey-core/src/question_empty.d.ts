import { Question } from "./question";
/**
 * A Model for an question that renders empty "div" tag. It used as a base class for some custom widgets
 */
export declare class QuestionEmptyModel extends Question {
    constructor(name: string);
    getType(): string;
}
