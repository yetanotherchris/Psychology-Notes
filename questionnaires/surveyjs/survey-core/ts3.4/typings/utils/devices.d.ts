export declare const IsMobile: boolean;
export declare var mouseInfo: {
    readonly isTouch: boolean;
    readonly hasTouchEvent: boolean;
    hasMouse: boolean;
};
export declare let IsTouch: boolean;
export declare function _setIsTouch(val: boolean): void;
export declare type MatchMediaMethod = ((query: string) => {
    matches: boolean;
} | null) | null;
export declare function detectMouseSupport(matchMedia: MatchMediaMethod): boolean;
