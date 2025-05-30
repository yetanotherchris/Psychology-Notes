import { IAction } from "./actions/action";
import { Base } from "./base";
import { ItemValue } from "./itemvalue";
import { ListModel } from "./list";
import { PopupModel } from "./popup";
import { Question } from "./question";
export declare class DropdownListModel extends Base {
    protected question: Question;
    protected onSelectionChanged?: (item: IAction, ...params: any[]) => void;
    readonly minPageSize = 25;
    readonly loadingItemHeight = 40;
    timer: any;
    private htmlCleanerElement;
    private _markdownMode;
    private _popupModel;
    private filteredItems;
    focused: boolean;
    private readonly focusFirstInputSelector: any;
    protected readonly selectedItemSelector = ".sv-list__item--selected";
    protected readonly itemSelector = ".sv-list__item";
    protected getFocusFirstInputSelector(): string;
    private itemsSettings;
    protected listModel: ListModel<ItemValue>;
    protected listModelFilterStringChanged: (newValue: string) => void;
    private resetItemsSettings;
    private setItems;
    private loadQuestionChoices;
    private updateQuestionChoices;
    private resetTimer;
    private updatePopupFocusFirstInputSelector;
    private getDropdownMenuOptions;
    protected createPopup(): void;
    private setFilterStringToListModel;
    private setTextWrapEnabled;
    protected popupRecalculatePosition(isResetHeight: boolean): void;
    protected onHidePopup(): void;
    protected getAvailableItems(): Array<ItemValue>;
    protected setOnTextSearchCallbackForListModel(listModel: ListModel<ItemValue>): void;
    protected createListModel(): ListModel<ItemValue>;
    protected updateAfterListModelCreated(model: ListModel<ItemValue>): void;
    protected getPopupCssClasses(): string;
    updateCssClasses(popupCssClass: string, listCssClasses: any): void;
    protected resetFilterString(): void;
    clear(): void;
    protected onSetFilterString(): void;
    readonly isAllDataLoaded: boolean;
    readonly canShowSelectedItem: boolean;
    searchEnabled: boolean;
    filterString: string;
    inputString: string;
    showInputFieldComponent: boolean;
    ariaActivedescendant: string;
    private applyInputString;
    private cleanHtml;
    protected fixInputCase(): void;
    protected applyHintString(item: ItemValue): void;
    inputStringRendered: string;
    readonly placeholderRendered: any;
    readonly listElementId: string;
    hasScroll: boolean;
    hintString: string;
    private readonly hintStringLC: any;
    private readonly inputStringLC: any;
    readonly showHintPrefix: boolean;
    readonly hintStringPrefix: string;
    readonly showHintString: boolean;
    readonly hintStringSuffix: string;
    readonly hintStringMiddle: string;
    private questionPropertyChangedHandler;
    constructor(question: Question, onSelectionChanged?: (item: IAction, ...params: any[]) => void);
    readonly popupModel: PopupModel;
    readonly noTabIndex: boolean;
    readonly filterReadOnly: boolean;
    readonly filterStringEnabled: boolean;
    readonly inputMode: "none" | "text";
    setSearchEnabled(newValue: boolean): void;
    setChoicesLazyLoadEnabled(newValue: boolean): void;
    updateItems(): void;
    onClick(event: any): void;
    chevronPointerDown(event: any): void;
    protected onPropertyChangedHandler(sender: any, options: any): void;
    protected focusItemOnClickAndPopup(): void;
    onClear(event: any): void;
    getSelectedAction(): ItemValue;
    changeSelectionWithKeyboard(reverse: boolean): void;
    protected beforeScrollToFocusedItem(focusedItem: ItemValue): void;
    protected afterScrollToFocusedItem(): void;
    keyHandler(event: any): void;
    protected onEscape(): void;
    onScroll(event: Event): void;
    onBlur(event: any): void;
    onFocus(event: any): void;
    setInputStringFromSelectedItem(newValue: any): void;
    dispose(): void;
    scrollToFocusedItem(): void;
}
