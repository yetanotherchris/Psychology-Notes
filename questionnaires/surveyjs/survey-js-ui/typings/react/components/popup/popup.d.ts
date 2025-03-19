/// <reference types="react" />
import { Base, PopupModel, PopupBaseViewModel, IDialogOptions } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IPopupProps {
    model: PopupModel;
    getTarget?: (container: HTMLElement) => HTMLElement;
    getArea?: (container: HTMLElement) => HTMLElement;
}
export declare class Popup extends SurveyElementBase<IPopupProps, any> {
    private popup;
    private containerRef;
    constructor(props: IPopupProps);
    get model(): PopupModel;
    protected getStateElement(): Base;
    private createModel;
    private setTargetElement;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    componentWillUnmount(): void;
    shouldComponentUpdate(nextProps: IPopupProps, nextState: any): boolean;
    render(): JSX.Element;
}
export declare class PopupContainer extends SurveyElementBase<any, any> {
    constructor(props: any);
    handleKeydown: (event: any) => void;
    get model(): PopupBaseViewModel;
    protected getStateElement(): Base;
    clickInside: (ev: any) => void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    renderContainer(popupBaseViewModel: PopupBaseViewModel): JSX.Element;
    renderHeaderContent(): JSX.Element;
    renderContent(): JSX.Element;
    protected renderHeaderPopup(popupModel: PopupBaseViewModel): JSX.Element | null;
    protected renderFooter(popuModel: PopupBaseViewModel): JSX.Element | null;
    render(): JSX.Element;
}
export declare class PopupDropdownContainer extends PopupContainer {
    protected renderHeaderPopup(popupModel: PopupBaseViewModel): JSX.Element | null;
}
export declare function showModal(componentName: string, data: any, onApply: () => boolean, onCancel?: () => void, cssClass?: string, title?: string, displayMode?: "popup" | "overlay"): PopupBaseViewModel;
export declare function showDialog(dialogOptions: IDialogOptions, rootElement?: HTMLElement): PopupBaseViewModel;
export {};
