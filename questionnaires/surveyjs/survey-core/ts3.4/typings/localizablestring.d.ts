import { EventBase } from "./base";
export interface ILocalizableOwner {
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getProcessedText(text: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
}
export interface ILocalizableString {
    getLocaleText(loc: string): string;
    setLocaleText(loc: string, newValue: string): any;
    getJson(): any;
    getLocales(): Array<string>;
    getIsMultiple(): boolean;
}
/**
 * The class represents the string that supports multi-languages and markdown.
 * It uses in all objects where support for multi-languages and markdown is required.
 */
export declare class LocalizableString implements ILocalizableString {
    owner: ILocalizableOwner;
    useMarkdown: boolean;
    name?: string;
    static SerializeAsObject: boolean;
    static defaultLocale: string;
    static defaultRenderer: string;
    static editableRenderer: string;
    private values;
    private htmlValues;
    private renderedText;
    private calculatedTextValue;
    private _localizationName;
    localizationName: string;
    private _allowLineBreaks;
    readonly allowLineBreaks: boolean;
    onGetTextCallback: (str: string) => string;
    storeDefaultText: boolean;
    onGetLocalizationTextCallback: (str: string) => string;
    onStrChanged: (oldValue: string, newValue: string) => void;
    onSearchChanged: () => void;
    sharedData: LocalizableString;
    searchText: string;
    searchIndex: number;
    disableLocalization: boolean;
    defaultValue: string;
    constructor(owner: ILocalizableOwner, useMarkdown?: boolean, name?: string);
    getIsMultiple(): boolean;
    readonly locale: string;
    strChanged(): void;
    text: string;
    readonly calculatedText: string;
    private calcText;
    readonly pureText: string;
    private getRootDialect;
    private getLocalizationName;
    private getLocalizationStr;
    readonly hasHtml: boolean;
    readonly html: string;
    readonly isEmpty: boolean;
    readonly textOrHtml: string;
    readonly renderedHtml: string;
    getLocaleText(loc: string): string;
    private getLocaleTextCore;
    private isLocaleTextEqualsWithDefault;
    clear(): void;
    clearLocale(loc?: string): void;
    setLocaleText(loc: string, value: string): void;
    private isValueEmpty;
    private readonly curLocale: any;
    private canRemoveLocValue;
    private fireStrChanged;
    hasNonDefaultText(): boolean;
    getLocales(): Array<string>;
    getJson(): any;
    setJson(value: any): void;
    readonly renderAs: string;
    readonly renderAsData: any;
    equals(obj: any): boolean;
    private searchableText;
    setFindText(text: string): boolean;
    onChanged(): void;
    onStringChanged: EventBase<LocalizableString>;
    protected onCreating(): void;
    private hasHtmlValue;
    private setHtmlValue;
    getHtmlValue(): string;
    private deleteValuesEqualsToDefault;
    private getValue;
    private setValue;
    private deleteValue;
    private getValueLoc;
    private getValuesKeys;
    private readonly defaultLoc: any;
}
/**
 * The class represents the list of strings that supports multi-languages.
 */
export declare class LocalizableStrings implements ILocalizableString {
    owner: ILocalizableOwner;
    private values;
    onValueChanged: (oldValue: any, newValue: any) => void;
    constructor(owner: ILocalizableOwner);
    getIsMultiple(): boolean;
    readonly locale: string;
    value: Array<string>;
    text: string;
    getLocaleText(loc: string): string;
    setLocaleText(loc: string, newValue: string): any;
    getValue(loc: string): Array<string>;
    private getValueCore;
    setValue(loc: string, val: Array<string>): void;
    hasValue(loc?: string): boolean;
    readonly isEmpty: boolean;
    private getLocale;
    getLocales(): Array<string>;
    getJson(): any;
    setJson(value: any): void;
    private getValuesKeys;
}
