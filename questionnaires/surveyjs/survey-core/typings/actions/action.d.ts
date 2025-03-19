import { ILocalizableOwner, LocalizableString } from "../localizablestring";
import { Base, ComputedUpdater } from "../base";
import { IListModel } from "../list";
import { IPopupOptionsBase, PopupModel } from "../popup";
export declare type actionModeType = "large" | "small" | "popup" | "removed";
/**
 * An action item.
 *
 * Action items are used in the Toolbar, matrix rows, titles of pages, panels, questions, and other survey elements.
 *
 * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
 */
export interface IAction {
    /**
     * A unique action item identifier.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
     */
    id?: string;
    /**
     * Specifies the action item's visibility.
     * @see enabled
     * @see active
     */
    visible?: boolean | ComputedUpdater<boolean>;
    /**
     * The action item's title.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
     * @see showTitle
     * @see disableShrink
     */
    title?: string;
    locTitle?: LocalizableString;
    locTitleName?: string;
    /**
     * The action item's tooltip.
     */
    tooltip?: string;
    locTooltipName?: string;
    /**
     * Specifies whether users can interact with the action item.
     * @see active
     * @see visible
     */
    enabled?: boolean | ComputedUpdater<boolean>;
    enabledIf?: () => boolean;
    /**
     * Specifies the visibility of the action item's title.
     * @see title
     * @see disableShrink
     */
    showTitle?: boolean;
    /**
     * A function that is executed when users click the action item.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
     */
    action?: (context?: any) => void;
    onFocus?: (isMouse: boolean, event: any) => void;
    /**
     * One or several CSS classes that you want to apply to the outer `<div>` element.
     *
     * In the markup, an action item is rendered as an `<input>` wrapped in a `<div>`. The `css` property applies classes to the `<div>`.
     *
     * To apply several classes, separate them with a space character: `"myclass1 myclass2"`.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
     * @see innerCss
     */
    css?: string;
    /**
     * One or several CSS classes that you want to apply to the inner `<input>` element.
     *
     * In the markup, an action item is rendered as an `<input>` wrapped in a `<div>`. The `innerCss` property applies classes to the `<input>`.
     *
     * To apply several classes, separate them with a space character: `"myclass1 myclass2"`.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
     * @see css
     */
    innerCss?: string;
    /**
     * The action item's data object. Use it to pass required data to a custom template or component.
     */
    data?: any;
    popupModel?: any;
    needSeparator?: boolean;
    /**
     * Specifies whether the action item is active.
     *
     * Use this property as a flag to specify different action item appearances in different states.
     * @see enabled
     * @see visible
     */
    active?: boolean;
    pressed?: boolean;
    /**
     * Specifies the name of a template used to render the action item.
     * @see component
     */
    template?: string;
    /**
     * Specifies the name of a component used to render the action item.
     */
    component?: string;
    /**
     * The action item's icon name.
     * @see iconSize
     */
    iconName?: string;
    /**
     * The action item's icon size in pixels.
     * @see iconName
     */
    iconSize?: number | string;
    /**
     * The action item's location in a matrix question's row.
     *
     * The following values are available:
     *
     * - `"start"` - The action item is located at the beginning of the row.
     * - `"end"` - The action is located at the end of the row.
     */
    location?: string;
    /**
     * Set this property to `true` if you want to disable keyboard navigation for the action item (sets the `tabIndex` attribute to -1).
     */
    disableTabStop?: boolean;
    /**
     * Set this property to `true` if you want the item's `title` to be always visible.
     * If you set it to `false`, the `title` hides when the screen space is limited, and the item displays only the icon.
     * @see title
     * @see iconName
     */
    disableShrink?: boolean;
    disableHide?: boolean;
    mode?: actionModeType;
    /**
     * A number that specifies the action's position relative to other actions.
     *
     * [View Demo](https://surveyjs.io/form-library/examples/add-custom-navigation-button/ (linkStyle))
     */
    visibleIndex?: number;
    needSpace?: boolean;
    ariaChecked?: boolean;
    ariaExpanded?: boolean;
    ariaRole?: string;
    elementId?: string;
    items?: Array<IAction>;
    markerIconName?: string;
    markerIconSize?: number;
    showPopup?: () => void;
    hidePopup?: () => void;
}
export interface IActionDropdownPopupOptions extends IListModel, IPopupOptionsBase {
}
export declare function createDropdownActionModel(actionOptions: IAction, dropdownOptions: IActionDropdownPopupOptions, locOwner?: ILocalizableOwner): Action;
export declare function createDropdownActionModelAdvanced(actionOptions: IAction, listOptions: IListModel, popupOptions?: IPopupOptionsBase): Action;
export declare function createPopupModelWithListModel(listOptions: IListModel, popupOptions: IPopupOptionsBase): PopupModel;
export declare function getActionDropdownButtonTarget(container: HTMLElement): HTMLElement;
export declare abstract class BaseAction extends Base implements IAction {
    items?: IAction[];
    private static renderedId;
    private static getNextRendredId;
    private cssClassesValue;
    private rendredIdValue;
    private ownerValue;
    tooltip: string;
    showTitle: boolean;
    innerCss: string;
    active: boolean;
    pressed: boolean;
    data: any;
    popupModel: any;
    needSeparator: boolean;
    template: string;
    mode: actionModeType;
    visibleIndex: number;
    disableTabStop: boolean;
    disableShrink: boolean;
    disableHide: boolean;
    needSpace: boolean;
    ariaChecked: boolean;
    ariaExpanded: boolean;
    ariaRole: string;
    id: string;
    removePriority: number;
    iconName: string;
    iconSize: number;
    markerIconName: string;
    markerIconSize: number;
    css?: string;
    minDimension: number;
    maxDimension: number;
    get renderedId(): number;
    get owner(): ILocalizableOwner;
    set owner(val: ILocalizableOwner);
    get visible(): boolean;
    set visible(val: boolean);
    get enabled(): boolean;
    set enabled(val: boolean);
    get component(): string;
    set component(val: string);
    get locTitle(): LocalizableString;
    set locTitle(val: LocalizableString);
    get title(): string;
    set title(val: string);
    set cssClasses(val: any);
    get cssClasses(): any;
    get isVisible(): boolean;
    get disabled(): boolean;
    get canShrink(): boolean;
    get hasTitle(): boolean;
    get hasSubItems(): boolean;
    getActionBarItemTitleCss(): string;
    getActionBarItemCss(): string;
    getActionRootCss(): string;
    getTooltip(): string;
    getIsTrusted(args: any): boolean;
    showPopup(): void;
    hidePopup(): void;
    isPressed: boolean;
    isHovered: boolean;
    private showPopupTimeout;
    private hidePopupTimeout;
    private clearPopupTimeouts;
    showPopupDelayed(delay: number): void;
    hidePopupDelayed(delay: number): void;
    protected abstract getEnabled(): boolean;
    protected abstract setEnabled(val: boolean): void;
    protected abstract getVisible(): boolean;
    protected abstract setVisible(val: boolean): void;
    protected abstract getLocTitle(): LocalizableString;
    protected abstract setLocTitle(val: LocalizableString): void;
    protected abstract getTitle(): string;
    protected abstract setTitle(val: string): void;
    protected abstract getComponent(): string;
    protected abstract setComponent(val: string): void;
}
export declare class Action extends BaseAction implements IAction, ILocalizableOwner {
    innerItem: IAction;
    private locTitleValue;
    updateCallback: (isResetInitialized: boolean) => void;
    private raiseUpdate;
    constructor(innerItem: IAction);
    private createLocTitle;
    setSubItems(options: IListModel): void;
    location?: string;
    id: string;
    private _visible;
    locTooltipName?: string;
    private _enabled;
    action: (context?: any, isUserAction?: boolean) => void;
    onFocus: (isMouse: boolean, event: any) => void;
    _component: string;
    items: any;
    _title: string;
    protected getLocTitle(): LocalizableString;
    protected setLocTitle(val: LocalizableString): void;
    protected getTitle(): string;
    protected setTitle(val: string): void;
    get locTitleName(): string;
    set locTitleName(val: string);
    locStrsChanged(): void;
    doAction(args: any): boolean;
    private isMouseDown;
    doMouseDown(): void;
    doFocus(args: any): void;
    private locStrChangedInPopupModel;
    private locTitleChanged;
    private locTooltipChanged;
    getLocale(): string;
    getMarkdownHtml(text: string, name: string): string;
    getProcessedText(text: string): string;
    getRenderer(name: string): string;
    getRendererContext(locStr: LocalizableString): any;
    setVisible(val: boolean): void;
    getVisible(): boolean;
    enabledIf?: () => boolean;
    setEnabled(val: boolean): void;
    getEnabled(): boolean;
    setComponent(val: string): void;
    getComponent(): string;
    dispose(): void;
}
export declare class ActionDropdownViewModel {
    private item;
    private popupModel;
    private funcKey;
    constructor(item: Action);
    private setupPopupCallbacks;
    private removePopupCallbacks;
    dispose(): void;
}
