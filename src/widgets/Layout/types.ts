import { PropsWithChildren } from "react";
import { Login } from "../WalletModal/types";
import { IconType } from "./icons/types";

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  pushNav: () => void;
}

export interface NavTheme {
  background: string;
  hover: string;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  openTab?: boolean;
}

export interface NavEntry {
  label: string;
  items?: MenuSubEntry[];
  openTab?: boolean;
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
}

export interface HeaderNavProps {
  links: Array<NavEntry>;
}

export interface SocialEntry {
  label: string;
  href: string;
  icon: IconType;
}

export interface DocsEntry {
  title: string;
  href: string;
}

export interface FooterLinks {
  socialLinks: Array<SocialEntry>;
  docs: Array<DocsEntry>;
}

export interface NavProps extends HeaderNavProps, FooterLinks, PropsWithChildren<unknown> {
  account?: string;
  login: Login;
  profile?: Profile;
  logout: () => void;
}
