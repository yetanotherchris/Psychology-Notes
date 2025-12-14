import { Question } from "./question";
export declare class RendererFactory {
    static Instance: RendererFactory;
    private renderersHash;
    private defaultHash;
    unregisterRenderer(questionType: string, rendererAs: string): void;
    registerRenderer(questionType: string, renderAs: string, renderer: any, useAsDefault?: boolean): void;
    getRenderer(questionType: string, renderAs: string): string;
    getRendererByQuestion(question: Question): any;
    clear(): void;
}
