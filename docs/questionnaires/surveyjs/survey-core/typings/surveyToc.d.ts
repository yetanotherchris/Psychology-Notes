import { Action } from "./actions/action";
import { ListModel } from "./list";
import { PanelModelBase } from "./panel";
import { PopupModel } from "./popup";
import { SurveyModel } from "./survey";
export declare function tryFocusPage(survey: SurveyModel, panel: PanelModelBase): boolean;
export declare function createTOCListModel(survey: SurveyModel, onAction?: () => void): ListModel<Action>;
export declare function getTocRootCss(survey: SurveyModel, isMobile?: boolean): string;
export declare class TOCModel {
    survey: SurveyModel;
    static RootStyle: string;
    static StickyPosition: boolean;
    constructor(survey: SurveyModel);
    private initStickyTOCSubscriptions;
    updateStickyTOCSize(rootElement: HTMLElement): void;
    get isMobile(): boolean;
    get containerCss(): string;
    listModel: ListModel<Action>;
    popupModel: PopupModel;
    icon: string;
    togglePopup: () => void;
    dispose(): void;
}
