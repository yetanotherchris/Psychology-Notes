import { Base } from "./base";
import { HorizontalAlignment, VerticalAlignment } from "./base-interfaces";
import { SurveyModel } from "./survey";
import { ITheme } from "./themes";
export declare class CoverCell {
    private cover;
    private positionX;
    private positionY;
    static CLASSNAME: string;
    private calcRow;
    private calcColumn;
    private calcAlignItems;
    private calcAlignText;
    private calcJustifyContent;
    constructor(cover: Cover, positionX: HorizontalAlignment, positionY: VerticalAlignment);
    readonly survey: SurveyModel;
    readonly css: string;
    readonly style: any;
    readonly contentStyle: any;
    readonly showLogo: boolean;
    readonly showTitle: boolean;
    readonly showDescription: boolean;
    readonly textAreaWidth: string;
}
export declare class Cover extends Base {
    private _survey;
    private calcBackgroundSize;
    private updateCoverClasses;
    private updateContentClasses;
    private updateBackgroundImageClasses;
    fromTheme(theme: ITheme): void;
    constructor();
    getType(): string;
    cells: CoverCell[];
    height: number;
    inheritWidthFrom: "survey" | "container";
    textAreaWidth: number;
    textGlowEnabled: boolean;
    overlapEnabled: boolean;
    backgroundColor: string;
    backgroundImage: string;
    renderBackgroundImage: string;
    backgroundImageFit: "cover" | "fill" | "contain" | "tile";
    backgroundImageOpacity: number;
    logoPositionX: HorizontalAlignment;
    logoPositionY: VerticalAlignment;
    titlePositionX: HorizontalAlignment;
    titlePositionY: VerticalAlignment;
    descriptionPositionX: HorizontalAlignment;
    descriptionPositionY: VerticalAlignment;
    logoStyle: {
        gridColumn: number;
        gridRow: number;
    };
    titleStyle: {
        gridColumn: number;
        gridRow: number;
    };
    descriptionStyle: {
        gridColumn: number;
        gridRow: number;
    };
    coverClasses: string;
    contentClasses: string;
    maxWidth: string;
    backgroundImageClasses: string;
    readonly renderedHeight: string;
    readonly renderedtextAreaWidth: string;
    survey: SurveyModel;
    readonly backgroundImageStyle: {
        opacity: number;
        backgroundImage: string;
        backgroundSize: string;
    };
    protected propertyValueChanged(name: string, oldValue: any, newValue: any): void;
}
