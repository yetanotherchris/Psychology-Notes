import React from "react";
import { SurveyActionBarItem } from "./action-bar-item";
export declare class SurveyActionBarItemDropdown extends SurveyActionBarItem {
    private viewModel;
    constructor(props: any);
    renderInnerButton(): React.JSX.Element;
    componentDidMount(): void;
    componentWillUnmount(): void;
}
