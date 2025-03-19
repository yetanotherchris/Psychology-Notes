import { Question } from "./question";
import { IElement } from "./base-interfaces";
export declare class QuestionFactory {
    static Instance: QuestionFactory;
    static get DefaultChoices(): string[];
    static get DefaultColums(): string[];
    static get DefaultRows(): string[];
    static get DefaultMutlipleTextItems(): string[];
    registerQuestion(questionType: string, questionCreator: (name: string) => Question, showInToolbox?: boolean): void;
    registerCustomQuestion(questionType: string): void;
    unregisterElement(elementType: string, removeFromSerializer?: boolean): void;
    clear(): void;
    getAllTypes(): Array<string>;
    createQuestion(questionType: string, name: string): Question;
}
export declare class ElementFactory {
    static Instance: ElementFactory;
    private creatorHash;
    registerElement(elementType: string, elementCreator: (name: string) => IElement, showInToolbox?: boolean): void;
    registerCustomQuestion: (questionType: string, showInToolbox?: boolean) => void;
    clear(): void;
    unregisterElement(elementType: string, removeFromSerializer?: boolean): void;
    getAllToolboxTypes(): Array<string>;
    getAllTypes(): Array<string>;
    createElement(elementType: string, name: string): IElement;
    private getAllTypesCore;
}
