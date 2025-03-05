import React from "react";
import { SurveyElementBase } from "../../reactquestion_element";
import { IDialogOptions, PopupBaseViewModel } from "survey-core";
interface IModalDescriptor {
    init: () => void;
    clean: () => void;
}
export declare class PopupModal extends SurveyElementBase<{}, any> {
    private model;
    private isInitialized;
    private descriptor;
    constructor(props: {});
    static modalDescriptors: Array<IModalDescriptor>;
    static addModalDescriptor(descriptor: IModalDescriptor): void;
    static removeModalDescriptor(descriptor: IModalDescriptor): void;
    protected renderElement(): React.JSX.Element | null;
    showDialog(dialogOptions: IDialogOptions, rootElement?: HTMLElement): PopupBaseViewModel;
    init: () => void;
    clean: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
export {};
