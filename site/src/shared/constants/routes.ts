import { GITHUB_ICON, TELEGRAM_ICON, VK_ICON } from "../../../public";

export const NAVIGATION_ITEMS = ['Home', 'About', 'Projects', 'Contact'] as const;

export const SOCIAL_LINKS = [
    { href: 'https://github.com/hellpes666', title: 'GitHub', img: GITHUB_ICON },
    { href: 'https://t.me/hellpes1111111', title: 'Telegram', img: TELEGRAM_ICON },
    { href: 'https://vk.com/psychohellpes', title: 'VK', img: VK_ICON }
] as const; 