import { Question } from "./question";
import { PanelModel } from "./panel";
import { ISurvey, ITextProcessor } from "./base-interfaces";
export declare class TextPreProcessorItem {
    start: number;
    end: number;
}
export declare class TextPreProcessorValue {
    name: string;
    returnDisplayValue: boolean;
    constructor(name: string, returnDisplayValue: boolean);
    value: any;
    isExists: boolean;
    canProcess: boolean;
}
export declare class TextPreProcessor {
    private _unObservableValues;
    private hasAllValuesOnLastRunValue: any;
    onProcess: (textValue: TextPreProcessorValue) => void;
    process(text: string, returnDisplayValue?: boolean, doEncoding?: boolean): string;
    processValue(name: string, returnDisplayValue: boolean): TextPreProcessorValue;
    readonly hasAllValuesOnLastRun: boolean;
    private getItems;
    private getName;
}
export declare class QuestionTextProcessor implements ITextProcessor {
    protected variableName: string;
    private textPreProcessor;
    constructor(variableName: string);
    processValue(name: string, returnDisplayValue: boolean): TextPreProcessorValue;
    protected readonly survey: ISurvey;
    protected readonly panel: PanelModel;
    protected getValues(): any;
    protected getQuestionByName(name: string): Question;
    protected getParentTextProcessor(): ITextProcessor;
    protected onCustomProcessText(textValue: TextPreProcessorValue): boolean;
    protected getQuestionDisplayText(question: Question): string;
    private getProcessedTextValue;
    processText(text: string, returnDisplayValue: boolean): string;
    processTextEx(text: string, returnDisplayValue: boolean): any;
    private processTextCore;
}
