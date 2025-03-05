export declare class DomWindowHelper {
    static isAvailable(): boolean;
    static isFileReaderAvailable(): boolean;
    static getLocation(): Location;
    static getVisualViewport(): VisualViewport | null;
    static getInnerWidth(): number;
    static getInnerHeight(): number;
    static getWindow(): Window;
    static hasOwn(propertyName: string): boolean;
    static getSelection(): Selection | null;
    static requestAnimationFrame(callback: FrameRequestCallback): number;
    static addEventListener(type: string, listener: (e?: any) => void): void;
    static removeEventListener(type: string, listener: (e?: any) => void): void;
    static matchMedia(mediaQueryString: string): {
        matches: boolean;
    } | null;
}
export declare class DomDocumentHelper {
    static isAvailable(): boolean;
    static getBody(): HTMLElement;
    static getDocumentElement(): HTMLElement;
    static getDocument(): Document;
    static getCookie(): string;
    static setCookie(newCookie: string): void;
    static activeElementBlur(): Document;
    static createElement(tagName: string): HTMLElement;
    static getComputedStyle(elt: Element): CSSStyleDeclaration;
    static addEventListener(type: string, listener: (e?: any) => void): void;
    static removeEventListener(type: string, listener: (e?: any) => void): void;
}
