import { EventBase } from "./base";
interface SvgIconData {
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
    registerIcons(icons: SvgIconData): void;
    iconsRenderedHtml(): string;
    updateMarkup(): void;
    onIconsChanged: EventBase<SvgIconRegistry, {}>;
}
export declare const SvgRegistry: SvgIconRegistry;
export declare const SvgThemeSets: {
    [index: string]: SvgIconData;
};
export declare function addIconsToThemeSet(name: string, iconsData: SvgIconData): void;
export {};
