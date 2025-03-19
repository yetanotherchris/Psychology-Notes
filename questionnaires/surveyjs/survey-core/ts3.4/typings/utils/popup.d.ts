export declare type VerticalPosition = "top" | "bottom" | "middle";
export declare type HorizontalPosition = "left" | "right" | "center";
export declare type PositionMode = "flex" | "fixed";
export interface IPosition {
    left?: number | string;
    top?: number | string;
}
export interface INumberPosition extends IPosition {
    left?: number;
    top?: number;
}
export interface ISize {
    width: number;
    height: number;
}
export declare class Rect implements ISize, INumberPosition {
    private x;
    private y;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number);
    readonly left: number;
    readonly top: number;
    readonly right: number;
    readonly bottom: number;
}
export declare class PopupUtils {
    static bottomIndent: number;
    static calculatePosition(targetRect: Rect, height: number, width: number, verticalPosition: VerticalPosition, horizontalPosition: HorizontalPosition, positionMode?: PositionMode): INumberPosition;
    static getCorrectedVerticalDimensions(top: number, height: number, windowHeight: number, verticalPosition: VerticalPosition, canShrink?: boolean): any;
    static updateHorizontalDimensions(left: number, width: number, windowWidth: number, horizontalPosition: HorizontalPosition, positionMode?: PositionMode, margins?: {
        left: number;
        right: number;
    }): {
        width: number;
        left: number;
    };
    static updateVerticalPosition(targetRect: Rect, height: number, horizontalPosition: HorizontalPosition, verticalPosition: VerticalPosition, windowHeight: number): VerticalPosition;
    static updateHorizontalPosition(targetRect: Rect, width: number, horizontalPosition: HorizontalPosition, windowWidth: number): HorizontalPosition;
    static calculatePopupDirection(verticalPosition: VerticalPosition, horizontalPosition: HorizontalPosition): string;
    static calculatePointerTarget(targetRect: Rect, top: number, left: number, verticalPosition: VerticalPosition, horizontalPosition: HorizontalPosition, marginLeft?: number, marginRight?: number): INumberPosition;
}
