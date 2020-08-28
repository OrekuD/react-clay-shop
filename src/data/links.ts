import { Twitter, Instagram, Facebook } from "../svg/Svg";
import Search from "../assets/icons/Icons-search_icn_black.png";
import Cart from "../assets/icons/cart_icn.png";
import User from "../assets/icons/user_icn.png";

export const socialLinks = [
  {
    id: "instagram",
    Icon: Instagram,
    size: 16,
  },
  {
    id: "twitter",
    Icon: Twitter,
    size: 25,
  },
  {
    id: "facebook",
    Icon: Facebook,
    size: 20,
  },
];

export const menulinks = [
  {
    id: "search",
    image: Search,
  },
  {
    id: "cart",
    image: Cart,
  },
  {
    id: "profile",
    image: User,
  },
];

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Shop",
    path: "/",
  },
  {
    name: "Blog",
    path: "/",
  },
  {
    name: "Contact",
    path: "/",
  },
];
