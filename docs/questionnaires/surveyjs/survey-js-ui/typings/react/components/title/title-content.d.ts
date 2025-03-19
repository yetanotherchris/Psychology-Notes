import React from "react";
import { ITitleOwner } from "survey-core";
export declare class TitleContent extends React.Component<any, any> {
    constructor(props: any);
    private get cssClasses();
    private get element();
    render(): JSX.Element;
    protected renderTitleSpans(element: ITitleOwner, cssClasses: any): Array<JSX.Element>;
    private renderRequireText;
}
