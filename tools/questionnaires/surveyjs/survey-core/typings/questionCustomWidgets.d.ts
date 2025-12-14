import { Event } from "./base";
import { IQuestion } from "./base-interfaces";
export declare class QuestionCustomWidget {
    name: string;
    widgetJson: any;
    htmlTemplate: string;
    constructor(name: string, widgetJson: any);
    afterRender(question: IQuestion, el: any): void;
    willUnmount(question: IQuestion, el: any): void;
    getDisplayValue(question: IQuestion, value?: any): string;
    validate(question: IQuestion): string;
    isFit(question: IQuestion): boolean;
    get canShowInToolbox(): boolean;
    get showInToolbox(): boolean;
    set showInToolbox(val: boolean);
    init(): void;
    activatedByChanged(activatedBy: string): void;
    private isLibraryLoaded;
    get isDefaultRender(): boolean;
    get pdfQuestionType(): string;
    get pdfRender(): any;
}
export declare class CustomWidgetCollection {
    static Instance: CustomWidgetCollection;
    private widgetsValues;
    private widgetsActivatedBy;
    onCustomWidgetAdded: Event<(customWidget: QuestionCustomWidget) => any, QuestionCustomWidget, any>;
    get widgets(): Array<QuestionCustomWidget>;
    add(widgetJson: any, activatedBy?: string): void;
    addCustomWidget(widgetJson: any, activatedBy?: string): QuestionCustomWidget;
    /**
     * Returns the way the custom wiget is activated. It can be activated by a property ("property"), question type ("type") or by new/custom question type ("customtype").
     * @param widgetName the custom widget name
     * @see setActivatedBy
     */
    getActivatedBy(widgetName: string): string;
    /**
     * Sets the way the custom wiget is activated. The activation types are: property ("property"), question type ("type") or new/custom question type ("customtype"). A custom wiget may support all or only some of this activation types.
     * @param widgetName
     * @param activatedBy there are three possible variants: "property", "type" and "customtype"
     */
    setActivatedBy(widgetName: string, activatedBy: string): void;
    clear(): void;
    getCustomWidgetByName(name: string): QuestionCustomWidget;
    getCustomWidget(question: IQuestion): QuestionCustomWidget;
}
