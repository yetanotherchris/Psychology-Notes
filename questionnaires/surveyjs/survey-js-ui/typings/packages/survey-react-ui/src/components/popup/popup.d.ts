import React from "react";
import { Base, PopupModel, PopupBaseViewModel } from "survey-core";
import { SurveyElementBase } from "../../reactquestion_element";
interface IPopupProps {
    model: PopupModel;
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
    render(): React.JSX.Element;
}
export declare class PopupContainer extends SurveyElementBase<any, any> {
    constructor(props: any);
    handleKeydown: (event: any) => void;
    get model(): PopupBaseViewModel;
    protected getStateElement(): Base;
    clickInside: (ev: any) => void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    renderContainer(popupBaseViewModel: PopupBaseViewModel): React.JSX.Element;
    renderHeaderContent(): React.JSX.Element;
    renderContent(): React.JSX.Element;
    protected renderHeaderPopup(popupModel: PopupBaseViewModel): React.JSX.Element | null;
    protected renderFooter(popuModel: PopupBaseViewModel): React.JSX.Element | null;
    render(): React.JSX.Element;
    componentDidMount(): void;
}
export declare class PopupDropdownContainer extends PopupContainer {
    protected renderHeaderPopup(popupModel: PopupBaseViewModel): React.JSX.Element | null;
}
export {};
