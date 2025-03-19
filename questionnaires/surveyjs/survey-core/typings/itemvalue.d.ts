import { ILocalizableOwner, LocalizableString } from "./localizablestring";
import { ConditionRunner } from "./conditions";
import { IShortcutText, ISurvey } from "./base-interfaces";
import { BaseAction } from "./actions/action";
/**
 * Array of ItemValue is used in checkbox, dropdown and radiogroup choices, matrix columns and rows.
 * It has two main properties: value and text. If text is empty, value is used for displaying.
 * The text property is localizable and support markdown.
 */
export declare class ItemValue extends BaseAction implements ILocalizableOwner, IShortcutText {
    protected typeName: string;
    [index: string]: any;
    getMarkdownHtml(text: string, name: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    getProcessedText(text: string): string;
    static get Separator(): string;
    static set Separator(val: string);
    /**
     * Resets the input array and fills it with values from the values array
     */
    static setData(items: Array<ItemValue>, values: Array<any>, type?: string): void;
    static getData(items: Array<ItemValue>): any;
    static getItemByValue(items: Array<ItemValue>, val: any): ItemValue;
    static getTextOrHtmlByValue(items: Array<ItemValue>, val: any): string;
    static locStrsChanged(items: Array<ItemValue>): void;
    static runConditionsForItems(items: Array<ItemValue>, filteredItems: Array<ItemValue>, runner: ConditionRunner, values: any, properties: any, useItemExpression?: boolean, onItemCallBack?: (item: ItemValue, val: boolean) => boolean): boolean;
    static runEnabledConditionsForItems(items: Array<ItemValue>, runner: ConditionRunner, values: any, properties: any, onItemCallBack?: (item: ItemValue, val: boolean) => boolean): boolean;
    private static runConditionsForItemsCore;
    ownerPropertyName: string;
    private _visible;
    private locTextValue;
    private visibleConditionRunner;
    private enableConditionRunner;
    constructor(value: any, text?: string, typeName?: string);
    onCreating(): any;
    getType(): string;
    getSurvey(live?: boolean): ISurvey;
    getLocale(): string;
    isGhost: boolean;
    protected get isInternal(): boolean;
    get locText(): LocalizableString;
    setLocText(locText: LocalizableString): void;
    private _locOwner;
    get locOwner(): ILocalizableOwner;
    set locOwner(value: ILocalizableOwner);
    get value(): any;
    set value(newValue: any);
    get hasText(): boolean;
    get pureText(): string;
    set pureText(val: string);
    get text(): string;
    set text(newText: string);
    get calculatedText(): string;
    get shortcutText(): string;
    private canSerializeValue;
    getData(): any;
    toJSON(): any;
    setData(value: any): void;
    get visibleIf(): string;
    set visibleIf(val: string);
    get enableIf(): string;
    set enableIf(val: string);
    get isVisible(): boolean;
    setIsVisible(val: boolean): void;
    get isEnabled(): boolean;
    setIsEnabled(val: boolean): void;
    addUsedLocales(locales: Array<string>): void;
    locStrsChanged(): void;
    protected onPropertyValueChanged(name: string, oldValue: any, newValue: any): void;
    protected getConditionRunner(isVisible: boolean): ConditionRunner;
    private getVisibleConditionRunner;
    private getEnableConditionRunner;
    originalItem: any;
    selectedValue: boolean;
    get selected(): boolean;
    private componentValue;
    getComponent(): string;
    setComponent(val: string): void;
    protected getEnabled(): boolean;
    protected setEnabled(val: boolean): void;
    protected getVisible(): boolean;
    protected setVisible(val: boolean): void;
    protected getLocTitle(): LocalizableString;
    protected getTitle(): string;
    protected setLocTitle(val: LocalizableString): void;
    protected setTitle(val: string): void;
    icon: string;
}
