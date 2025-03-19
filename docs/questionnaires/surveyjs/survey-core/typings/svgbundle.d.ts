declare class SvgIconData {
    [key: string]: string;
}
export declare class SvgIconRegistry {
    icons: SvgIconData;
    private iconPrefix;
    private processId;
    registerIconFromSymbol(iconId: string, iconSymbolSvg: string): void;
    registerIconFromSvgViaElement(iconId: string, iconSvg: string, iconPrefix?: string): void;
    registerIconFromSvg(iconId: string, iconSvg: string, iconPrefix?: string): boolean;
    registerIconsFromFolder(r: any): void;
    iconsRenderedHtml(): string;
}
export declare var SvgRegistry: SvgIconRegistry;
export declare var SvgBundleViewModel: any;
export {};
