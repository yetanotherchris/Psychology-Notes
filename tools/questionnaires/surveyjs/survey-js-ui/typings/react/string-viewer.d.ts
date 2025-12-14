import React from "react";
export declare class SurveyLocStringViewer extends React.Component<any, any> {
    constructor(props: any);
    private rootRef;
    private get locStr();
    private get style();
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentDidUpdate(prevProps: any, prevState: any): void;
    private isRendering;
    private onChangedHandler;
    private reactOnStrChanged;
    render(): JSX.Element | null;
    protected renderString(): JSX.Element;
}
