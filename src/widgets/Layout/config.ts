import { IconType } from "./icons/types";

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://exchange.pancakeswap.finance",
      },
      {
        label: "Liquidity",
        href: "https://exchange.pancakeswap.finance/#/pool",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Pools",
    icon: "PoolIcon",
    href: "/syrup",
  },
  {
    label: "Lottery",
    icon: "TicketIcon",
    href: "/lottery",
  },
  {
    label: "NFT",
    icon: "NftIcon",
    href: "/nft",
  },
  {
    label: "Profile & Teams",
    icon: "GroupsIcon",
    items: [
      {
        label: "Leaderboard",
        href: "/",
      },
      {
        label: "YourProfile",
        href: "/",
      },
    ],
    calloutClass: "rainbow",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "https://pancakeswap.info",
      },
      {
        label: "Tokens",
        href: "https://pancakeswap.info/tokens",
      },
      {
        label: "Pairs",
        href: "https://pancakeswap.info/pairs",
      },
      {
        label: "Accounts",
        href: "https://pancakeswap.info/accounts",
      },
    ],
  },
  {
    label: "IFO",
    icon: "IfoIcon",
    items: [
      {
        label: "Next",
        href: "/ifo",
      },
      {
        label: "History",
        href: "/ifo/history",
      },
    ],
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      // {
      //   label: "Voting",
      //   href: "https://voting.pancakeswap.finance",
      // },
      {
        label: "Github",
        href: "https://github.com/goosedefi/",
      },
      {
        label: "Docs",
        href: "https://goosedefi.gitbook.io/goose-finance/",
      },
      {
        label: "Blog",
        href: "https://goosefinance.medium.com/",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    items: [
      {
        label: "Sparkswap",
        href: "https://t.me/spark_swap",
      },
      {
        label: "EMP Money",
        href: "https://t.me/empmoney",
      },
      // {
      //   label: "Bahasa Indonesia",
      //   href: "https://t.me/PancakeSwapIndonesia",
      // },
      // {
      //   label: "中文",
      //   href: "https://t.me/goosefinancechinese",
      // },
      // {
      //   label: "Tiếng Việt",
      //   href: "https://t.me/PancakeSwapVN",
      // },
      // {
      //   label: "Italiano",
      //   href: "https://t.me/goosefinanceitalian",
      // },
      // {
      //   label: "русский",
      //   href: "https://t.me/goosefinancerussian",
      // },
      // {
      //   label: "Türkiye",
      //   href: "https://t.me/GooseFinanceTurkey",
      // },
      // {
      //   label: "Português",
      //   href: "https://t.me/PancakeSwapPortuguese",
      // },
      // {
      //   label: "Español",
      //   href: "https://t.me/goosefinancespanish",
      // },
      // {
      //   label: "日本語",
      //   href: "https://t.me/goosefinancejapanese",
      // },
      // {
      //   label: "Français",
      //   href: "https://t.me/goosefinancefrench",
      // },
      // {
      //   label: "Announcements",
      //   href: "https://t.me/goosefinanceann",
      // },
      // {
      //   label: "Price Bot",
      //   href: "https://t.me/BinanceRocketEGG",
      // },
    ],
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://x.com/sparkswap_",
  },
  // {
  //   label: "Reddit",
  //   icon: "RedditIcon",
  //   href: "https://www.reddit.com/r/GooseFinanceofficial",
  // },
];

export const socialsFooter = [
  {
    label: "Twitter",
    icon: "TwitterIcon" as IconType,
    href: "https://x.com/sparkswap_",
  },
  {
    label: "Youtube",
    icon: "YoutubeIcon" as IconType,
    href: "https://x.com/sparkswap_",
  },
  {
    label: "Discord",
    icon: "DiscordIcon" as IconType,
    href: "https://x.com/sparkswap_",
  },
  {
    label: "Telegram",
    icon: "TelegramIcon" as IconType,

    href: "https://x.com/sparkswap_",
  },
];
export const linksSpark = [
  {
    label: "Bridge",
    icon: "FarmIcon",
    href: "/bridge",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "/exchange",
      },
      {
        label: "Liquidity",
        href: "/liquidity",
      },
    ],
  },
  {
    label: "Farms",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Info",
    icon: "InfoIcon",
    items: [
      {
        label: "Overview",
        href: "/overview",
      },
      {
        label: "Tokens",
        href: "/tokens",
      },
      {
        label: "Pairs",
        href: "/pairs",
      },
      {
        label: "Accounts",
        href: "/accounts",
      },
    ],
  },
];

export const MENU_HEIGHT = 80;
export const FOOTER_HEIGHT = 138;
export const FOOTER_HEIGHT_MOBILE = 243;
export const MENU_ENTRY_HEIGHT = 22;
export const SIDEBAR_WIDTH_FULL = 220;
