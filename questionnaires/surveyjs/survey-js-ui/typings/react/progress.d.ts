/// <reference types="react" />
import { SurveyNavigationBase } from "./reactSurveyNavigationBase";
export declare class SurveyProgress extends SurveyNavigationBase {
    constructor(props: any);
    protected get isTop(): boolean;
    protected get progress(): number;
    protected get progressText(): string;
    render(): JSX.Element;
}
