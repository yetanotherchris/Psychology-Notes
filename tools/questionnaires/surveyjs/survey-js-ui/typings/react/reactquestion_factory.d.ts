/// <reference types="react" />
export declare class ReactQuestionFactory {
    static Instance: ReactQuestionFactory;
    private creatorHash;
    registerQuestion(questionType: string, questionCreator: (name: string) => JSX.Element): void;
    getAllTypes(): Array<string>;
    createQuestion(questionType: string, params: any): JSX.Element | null;
}
