/// <reference types="react" />
import { SurveyActionBarItem } from "./action-bar-item";
export declare class SurveyActionBarItemDropdown extends SurveyActionBarItem {
    private viewModel;
    constructor(props: any);
    renderInnerButton(): JSX.Element;
    componentWillUnmount(): void;
}
