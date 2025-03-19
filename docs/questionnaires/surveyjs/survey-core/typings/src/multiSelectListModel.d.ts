import { Action, BaseAction, IAction } from "./actions/action";
import { IListModel, ListModel } from "./list";
export interface IMultiSelectListModel extends IListModel {
    selectedItems?: Array<IAction>;
}
export declare class MultiSelectListModel<T extends BaseAction = Action> extends ListModel<T> {
    selectedItems: Array<IAction>;
    hideSelectedItems: boolean;
    private updateItemState;
    constructor(options: IMultiSelectListModel);
    onItemClick: (item: T) => void;
    isItemDisabled: (itemValue: T) => boolean;
    isItemSelected: (itemValue: T) => boolean;
    updateState(): void;
    setSelectedItems(newItems: Array<IAction>): void;
    selectFocusedItem(): void;
}
