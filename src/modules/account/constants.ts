import {
  AbegIcon,
  AppleMusicIcon,
  ApplePodcastIcon,
  AudioMackIcon,
  BankIcon,
  BoomPlayIcon,
  CalendlyIcon,
  CallIcon,
  CashAppIcon,
  ContactCardIcon,
  DeezerIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LeadsFormIcon,
  LinkedInIcon,
  PatreonIcon,
  PaypalIcon,
  PinterestIcon,
  SmsIcon,
  SnapchatIcon,
  SoundcloudIcon,
  SpotifyIcon,
  TelegramIcon,
  TiktokIcon,
  TripAdvicerIcon,
  TwitchIcon,
  TwitterIcon,
  VenmoIcon,
  VimeoIcon,
  WebsiteIcon,
  WhatsappIcon,
  YelpIcon,
  YoutubeIcon,
  ZelleIcon,
} from "assets";
import {
  AiFillBank,
  AiOutlineIdcard,
  AiOutlineLink,
  AiOutlineMail,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaSms, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineContactMail, MdOutlineEventNote } from "react-icons/md";
import { AccountNavItemsType, ActionsFormType, ActionsType } from "utils/types";
import getCountries, { getState } from "utils/getCountries";

export const ACCOUNT_ROOT = "/app";

export const ACCOUNT_NAV_ITEMS: AccountNavItemsType[] = [
  {
    id: 1,
    title: "My Card",
    href: `${ACCOUNT_ROOT}`,
    icon: AiOutlineIdcard,
  },
  {
    id: 2,
    title: "Orders",
    href: `${ACCOUNT_ROOT}/orders`,
    icon: AiOutlineShoppingCart,
  },
  {
    id: 3,
    title: "Profile",
    href: `${ACCOUNT_ROOT}/profile`,
    icon: CgProfile,
  },
];

export const AppIcons = {
  AbegIcon,
  AppleMusicIcon,
  ApplePodcastIcon,
  AudioMackIcon,
  BankIcon,
  BoomPlayIcon,
  CalendlyIcon,
  CallIcon,
  CashAppIcon,
  ContactCardIcon,
  DeezerIcon,
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  LeadsFormIcon,
  LinkedInIcon,
  PatreonIcon,
  PaypalIcon,
  PinterestIcon,
  SmsIcon,
  SnapchatIcon,
  SoundcloudIcon,
  SpotifyIcon,
  TelegramIcon,
  TiktokIcon,
  TripAdvicerIcon,
  TwitchIcon,
  TwitterIcon,
  VenmoIcon,
  VimeoIcon,
  WebsiteIcon,
  WhatsappIcon,
  YelpIcon,
  YoutubeIcon,
  ZelleIcon,
};

export const ACTIONS: ActionsType[] = [
  {
    id: 1,
    title: "Profile",
    icon: 'RiContactsLine',
    isDefault: true,
    fields: [
      {
        name: "Profile Image",
        type: "file",
      },
      {
        name: "Name",
        type: "text",
      },
      {
        name: "Title",
        type: "text",
      },
      {
        name: "Location",
        type: "text",
      },
      {
        name: "About",
        type: "long-text",
      },
    ],
  },
  {
    id: 2,
    title: "WhatsApp",
    icon: 'FaWhatsapp',
    isDefault: false,
    fields: [
      {
        name: "Phone Number",
        type: "text",
      },
      {
        name: "Message",
        type: "long-text",
      },
    ],
  },
  {
    id: 3,
    title: "Url",
    icon: 'AiOutlineLink',
    isDefault: false,
    fields: [
      {
        name: "URL",
        type: "url",
      },
    ],
  },
  {
    id: 4,
    title: "Event",
    icon: 'MdOutlineEventNote',
    isDefault: false,
    fields: [
      {
        name: "Title",
        type: "text",
      },
      {
        name: "Start Date",
        type: "date",
      },
      {
        name: "End Date",
        type: "date",
      },
      {
        name: "Time",
        type: "time",
      },
      {
        name: "Address",
        type: "location",
      },
      {
        name: "Postal Code",
        type: "text",
      },
      {
        name: "City",
        type: "text",
      },
      {
        name: "State",
        type: "state-select",
        options: getState("Nigeria"),
      },
      {
        name: "Url",
        type: "url",
      },
      {
        name: "Description",
        type: "long-text",
      },
    ],
  },
  {
    id: 5,
    title: "Contact Card",
    icon: 'MdOutlineContactMail',
    isDefault: false,
    fields: [
      {
        name: "Profile Image",
        type: "file",
      },
      {
        name: "Title",
        type: "text",
      },
      {
        name: "First name",
        type: "text",
      },
      {
        name: "Last name",
        type: "text",
      },
      {
        name: "Company",
        type: "text",
      },
      {
        name: "Position",
        type: "text",
      },
      {
        name: "Birthday",
        type: "date",
      },
      {
        name: "Home Phone",
        type: "text",
      },
      {
        name: "Office Phone",
        type: "text",
      },
      {
        name: "Personal Phone",
        type: "text",
      },
      {
        name: "Office Fax",
        type: "text",
      },
      {
        name: "Alternative Phone",
        type: "text",
      },
      {
        name: "Work Email",
        type: "email",
      },
      {
        name: "Personal Email",
        type: "email",
      },
      {
        name: "Website 1",
        type: "url",
      },
      {
        name: "Website 2",
        type: "url",
      },
      {
        name: "Payment Link",
        type: "url",
      },
      {
        name: "Home address",
        type: "text",
      },
      {
        name: "Office address",
        type: "text",
      },
      {
        name: "Home Postal Code",
        type: "text",
      },
      {
        name: "Office Postal Code",
        type: "text",
      },
      {
        name: "Home Country",
        type: "country-select",
        options: getCountries(),
      },
      {
        name: "Home State",
        type: "state-select",
      },
      {
        name: "Home City",
        type: "text",
      },
      {
        name: "Office Country",
        type: "country-select",
        options: getCountries(),
      },
      {
        name: "Office State",
        type: "state-select",
      },
      {
        name: "Office City",
        type: "text",
      },
      {
        name: "Theme",
        type: "color",
      },
    ],
  },
  {
    id: 6,
    title: "Sms",
    icon: 'FaSms',
    isDefault: false,
    requiresCountryCode:
      'Notice: Please put your country code before your number. For example: "+1".',
    fields: [
      {
        name: "Phone Number",
        type: "text",
      },
      {
        name: "Text",
        type: "long-text",
      },
    ],
  },
  {
    id: 7,
    title: "Call",
    icon: 'FiPhoneCall',
    isDefault: false,
    fields: [
      {
        name: "Phone number",
        type: "text",
      },
    ],
  },
  {
    id: 8,
    title: "Email",
    icon: 'AiOutlineMail',
    isDefault: false,
    fields: [
      {
        name: "Email",
        type: "email",
      },
      {
        name: "Subject",
        type: "text",
      },
      {
        name: "Content",
        type: "long-text",
      },
    ],
  },
  {
    id: 9,
    title: "Bank",
    icon: 'AiFillBank',
    isDefault: false,
    fields: [
      {
        name: "Name",
        type: "text",
      },
      {
        name: "Account Number",
        type: "text",
      },
      {
        name: "Bank Name",
        type: "text",
      },
    ],
  },
];

export const SOCIAL_LINKS: ActionsFormType = {
  social: [
    {
      id: 1,
      label: "Instagram",
      image: InstagramIcon,
    },
    {
      id: 2,
      label: "Facebook",
      image: FacebookIcon,
    },
    {
      id: 3,
      label: "Twitter",
      image: TwitterIcon,
    },
    {
      id: 4,
      label: "Tiktok",
      image: TiktokIcon,
    },
    {
      id: 5,
      label: "Youtube",
      image: YoutubeIcon,
    },
    {
      id: 6,
      label: "Pinterest",
      image: PinterestIcon,
    },
    {
      id: 7,
      label: "LinkedIn",
      image: LinkedInIcon,
    },
    {
      id: 8,
      label: "Snapchat",
      image: SnapchatIcon,
    },
    {
      id: 8,
      label: "Vimeo",
      image: VimeoIcon,
    },
    {
      id: 8,
      label: "Twitch",
      image: TwitchIcon,
    },
    {
      id: 8,
      label: "Telegram",
      image: TelegramIcon,
    },
  ],
  "Contact Info": [
    {
      id: 1,
      label: "Sms",
      image: SmsIcon,
      fields: ["Number", "Text"],
    },
    {
      id: 2,
      label: "Email",
      image: EmailIcon,
    },
    {
      id: 3,
      label: "WhatsApp",
      image: WhatsappIcon,
    },
    // {
    //   id: 4,
    //   label: "Call",
    //   image: CallIcon,
    // },
    // {
    //   id: 5,
    //   label: "Contact Card",
    //   image: ContactCardIcon,
    // },
    // {
    //   id: 6,
    //   label: "Leads Form",
    //   image: LeadsFormIcon,
    //   pro: true,
    // },
  ],
  "For Business": [
    {
      id: 1,
      label: "website",
      image: WebsiteIcon,
    },
    {
      id: 2,
      label: "Calendly",
      image: CalendlyIcon,
      pro: true,
    },
    {
      id: 3,
      label: "Yelp",
      image: YelpIcon,
      pro: true,
    },
    {
      id: 4,
      label: "Trip Advisor",
      image: TripAdvicerIcon,
      pro: true,
    },
  ],
  Payment: [
    {
      id: 1,
      label: "Bank Details",
      image: BankIcon,
    },
    {
      id: 2,
      label: "Cash App",
      image: CashAppIcon,
    },
    {
      id: 3,
      label: "Paypal",
      image: PaypalIcon,
    },
    {
      id: 4,
      label: "Zelle",
      image: ZelleIcon,
    },
    {
      id: 5,
      label: "Abeg",
      image: AbegIcon,
    },
    {
      id: 6,
      label: "Venmo",
      image: VenmoIcon,
    },
    {
      id: 7,
      label: "Patreon",
      image: PatreonIcon,
    },
  ],
  "Music Links": [
    {
      id: 1,
      label: "Spotify",
      image: SpotifyIcon,
    },
    {
      id: 2,
      label: "Apple Music",
      image: AppleMusicIcon,
    },
    {
      id: 3,
      label: "Sound Cloud",
      image: SoundcloudIcon,
    },
    {
      id: 4,
      label: "Apple Podcast",
      image: ApplePodcastIcon,
      pro: true,
    },
    {
      id: 6,
      label: "Deezer",
      image: DeezerIcon,
    },
    {
      id: 7,
      label: "Boom Play",
      image: BoomPlayIcon,
    },
    {
      id: 8,
      label: "Audio Mack",
      image: AudioMackIcon,
    },
  ],
};

export const themeColorOptions = [
  {
    title: "Plain",
    color: "brand.300",
  },
  {
    title: "Standard",
    color: "brand.200",
  },
  {
    title: "Customs",
    color: "gray.300",
  },
  {
    title: "Black",
    color: "black",
  },
  {
    title: "Blue",
    color: "blue.500",
  },
  {
    title: "Red",
    color: "red.500",
  },
];
