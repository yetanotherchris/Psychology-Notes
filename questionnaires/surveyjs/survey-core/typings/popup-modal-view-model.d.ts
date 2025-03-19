import { CssClassBuilder } from "./utils/cssClassBuilder";
import { PopupModel } from "./popup";
import { PopupBaseViewModel } from "./popup-view-model";
export declare class PopupModalViewModel extends PopupBaseViewModel {
    protected getStyleClass(): CssClassBuilder;
    protected getShowFooter(): boolean;
    protected createFooterActionBar(): void;
    constructor(model: PopupModel);
    get applyButtonText(): string;
    apply(): void;
    clickOutside(): void;
    onKeyDown(event: any): void;
    private onScrollOutsideCallback;
    updateOnShowing(): void;
    updateOnHiding(): void;
}
