import { ListModel } from "../list";
import { Action, actionModeType } from "./action";
import { ActionContainer } from "./container";
export declare class AdaptiveActionContainer<T extends Action = Action> extends ActionContainer<T> {
    dotsItem: Action;
    private responsivityManager;
    minVisibleItemsCount: number;
    isResponsivenessDisabled: boolean;
    private hideItemsGreaterN;
    private getActionsToHide;
    private updateItemMode;
    private static ContainerID;
    constructor();
    get hiddenItemsListModel(): ListModel;
    protected onSet(): void;
    protected onPush(item: T): void;
    protected getRenderedActions(): Array<T>;
    protected raiseUpdate(isResetInitialized: boolean): void;
    protected getActionMinDimension(action: Action): number;
    private getVisibleItemsCount;
    fit(options: {
        availableSpace: number;
        gap?: number;
    }): void;
    initResponsivityManager(container: HTMLDivElement): void;
    resetResponsivityManager(): void;
    setActionsMode(mode: actionModeType): void;
    dispose(): void;
}
