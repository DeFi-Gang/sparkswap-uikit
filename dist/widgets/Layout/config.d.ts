import { IconType } from "./icons/types";
export declare const links: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
    calloutClass?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    calloutClass: string;
    href?: undefined;
})[];
export declare const socials: ({
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
} | {
    label: string;
    icon: string;
    href: string;
    items?: undefined;
})[];
export declare const socialsFooter: {
    label: string;
    icon: IconType;
    href: string;
}[];
export declare const linksSpark: ({
    label: string;
    icon: string;
    href: string;
    items?: undefined;
} | {
    label: string;
    icon: string;
    items: {
        label: string;
        href: string;
    }[];
    href?: undefined;
})[];
export declare const MENU_HEIGHT = 80;
export declare const FOOTER_HEIGHT = 138;
export declare const FOOTER_HEIGHT_MOBILE = 281;
export declare const MENU_ENTRY_HEIGHT = 22;
export declare const SIDEBAR_WIDTH_FULL = 220;
