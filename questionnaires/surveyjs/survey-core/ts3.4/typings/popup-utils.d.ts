import { IDialogOptions, PopupModel } from "./popup";
import { PopupBaseViewModel } from "./popup-view-model";
export declare function createPopupModalViewModel(options: IDialogOptions, rootElement?: HTMLElement): PopupBaseViewModel;
export declare function createPopupViewModel(model: PopupModel, targetElement?: HTMLElement): PopupBaseViewModel;
