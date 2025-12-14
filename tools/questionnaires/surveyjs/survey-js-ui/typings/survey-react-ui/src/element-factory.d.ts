/// <reference types="react" />
export declare class ReactElementFactory {
    static Instance: ReactElementFactory;
    private creatorHash;
    registerElement(elementType: string, elementCreator: (props: any) => React.JSX.Element): void;
    getAllTypes(): Array<string>;
    isElementRegistered(elementType: string): boolean;
    createElement(elementType: string, params: any): React.JSX.Element | any;
}
