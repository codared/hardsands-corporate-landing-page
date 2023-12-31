import {
  AbegIcon,
  AppleMusicIcon,
  ApplePodcastIcon,
  AudioMackIcon,
  BankIcon,
  BankIconSVG,
  BankOutlineIcon,
  BoomPlayIcon,
  ContactCardIconSVG,
  ContactCardOutlineIcon,
  ChartIconSVG,
  CalendlyIcon,
  CalendarOutlineIcon,
  CallOutlineIcon,
  CallIcon,
  CashAppIcon,
  ContactCardIcon,
  DeezerIcon,
  EmailIcon,
  MessageIconOutline,
  FacebookIcon,
  FacetimeIcon,
  InstagramIcon,
  LeadsFormIcon,
  LeadsOutlineIcon,
  LinkedInIcon,
  LinkOutlineIcon,
  PatreonIcon,
  PaypalIcon,
  PinterestIcon,
  SmsIcon,
  SnapchatIcon,
  SocialCardIcon,
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
  MemberIcon,
  DashboardIcon,
  SmsOutlineIcon,
  SupportIcon,
  ReportIcon,
  MessagesIcon,
  LeadsIcon,
  DashWhatsAppIcon,
  ImportIconSVG,
  DevicesIcon,
  ReportsIcon,
  WhatsappOutline,
  PersonalCardIcon,
  VerticalDots,
  YelpIcon,
  YoutubeIcon,
  ZelleIcon,
  TemplatesIcon,
} from "assets";
import {
  AiFillBank,
  AiOutlineFacebook,
  AiOutlineFileText,
  AiOutlineIdcard,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlineWhatsApp,
  AiOutlineSetting,
} from "react-icons/ai";
import { FaSms, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall, FiTwitter } from "react-icons/fi";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineContactMail, MdOutlineEventNote } from "react-icons/md";
import { AccountNavItemsType, ActionsFormType, ActionsType } from "utils/types";
import getCountries from "utils/getCountries";
import { TbBinaryTree2, TbWorld } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

export const routeId = "${corporateId}";
export const ACCOUNT_ROOT = "/app";
export const DASH_ROOT = `/dashboard/${routeId}`;

export const enum ACTION_FORM_STATUS {
  ADD = "ADD",
  EDIT = "EDIT",
}

export const ACCOUNT_NAV_ITEMS: AccountNavItemsType[] = [
  {
    id: 1,
    title: "My Card",
    href: `${ACCOUNT_ROOT}`,
    icon: AiOutlineIdcard,
  },
  // {
  //   id: 2,
  //   title: "Orders",
  //   href: `${ACCOUNT_ROOT}/orders`,
  //   icon: AiOutlineShoppingCart,
  // },
  // {
  //   id: 3,
  //   title: "Profile",
  //   href: `${ACCOUNT_ROOT}/profile`,
  //   icon: CgProfile,
  // },
];

export const DASH_NAV_ITEMS: AccountNavItemsType[] = [
  {
    id: 1,
    title: "Dashboard",
    href: `${DASH_ROOT}`,
    icon: DashboardIcon,
    isImg: true,
  },
  {
    id: 2,
    title: "Members",
    href: `${DASH_ROOT}/members`,
    icon: MemberIcon,
    isImg: true,
  },

  {
    id: 3,
    title: "Devices",
    href: `${DASH_ROOT}/devices`,
    icon: DevicesIcon,
    isImg: true,
  },
  {
    id: 4,
    title: "Leads",
    href: `${DASH_ROOT}/leads`,
    icon: LeadsIcon,
    isImg: true,
  },
  {
    id: 5,
    title: "Reports",
    href: `${DASH_ROOT}/reports`,
    icon: ReportsIcon,
    isImg: true,
  },
  {
    id: 6,
    title: "Support",
    href: `${DASH_ROOT}/support/faq`,
    icon: SupportIcon,
    isImg: true,
  },
  {
    id: 7,
    title: "Settings",
    href: `${DASH_ROOT}/settings`,
    icon: IoSettingsOutline,
    isImg: false,
  },
];

export const ACCESS_DASH_NAV_ITEMS: AccountNavItemsType[] = [
  {
    id: 1,
    title: "Dashboard",
    href: `${DASH_ROOT}`,
    icon: DashboardIcon,
    isImg: true,
  },
  {
    id: 2,
    title: "Member",
    href: `${DASH_ROOT}/members`,
    icon: MemberIcon,
    isImg: true,
  },
  {
    id: 3,
    title: "Devices",
    href: `${DASH_ROOT}/devices`,
    icon: DevicesIcon,
    isImg: true,
  },

  {
    id: 4,
    title: "Support",
    href: `${DASH_ROOT}/support/faq`,
    icon: SupportIcon,
    isImg: true,
  },
  {
    id: 5,
    title: "Settings",
    href: `${DASH_ROOT}/settings`,
    icon: IoSettingsOutline,
    isImg: false,
  },
];

export const AppIcons = {
  "Social Card": RiContactsLine,
  WhatsApp: FaWhatsapp,
  URL: AiOutlineLink,
  Event: MdOutlineEventNote,
  "Contact Card": MdOutlineContactMail,
  SMS: FaSms,
  Call: FiPhoneCall,
  Email: AiOutlineMail,
  "Bank Account": AiFillBank,
  AbegIcon,
  AppleMusicIcon,
  ApplePodcastIcon,
  AudioMackIcon,
  BankIcon,
  BankOutlineIcon,
  BoomPlayIcon,
  CalendlyIcon,
  CalendarOutlineIcon,
  CallOutlineIcon,
  CallIcon,
  CashAppIcon,
  ContactCardIcon,
  ContactCardOutlineIcon,
  DeezerIcon,
  EmailIcon,
  MessageIconOutline,
  FacebookIcon,
  InstagramIcon,
  LeadsFormIcon,
  LeadsOutlineIcon,
  LinkedInIcon,
  PatreonIcon,
  PaypalIcon,
  PinterestIcon,
  SmsIcon,
  SmsOutlineIcon,
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
  SupportIcon,
  ReportIcon,
  MessagesIcon,
  LeadsIcon,
  LinkOutlineIcon,
  "Link tree": TbBinaryTree2,
  DashWhatsAppIcon,
  ContactCardIconSVG,
  BankIconSVG,
  WhatsappOutline,
  ChartIconSVG,
  ImportIconSVG,
  PersonalCardIcon,
  SocialCardIcon,
  VerticalDots,
  "Registration Form": AiOutlineFileText,
  "Sales Form": AiOutlineFileText,
  "Coming soon Form": AiOutlineFileText,
  "Consultation Form": AiOutlineFileText,
};

/*
{id: 3, action: 'Instagram', type: 'LINK'}
{id: 5, action: 'Facebook', type: 'LINK'}
{id: 6, action: 'LinkedIn', type: 'LINK'}
{id: 7, action: 'Twitter', type: 'LINK'}

{id: 4, action: 'Bank Account', type: 'BANK_ACCOUNT'}
{id: 8, action: 'Profile', type: 'LINK'}
{id: 1, action: 'Profile', type: 'LINK'}
{id: 9, action: 'WhatsApp', type: 'LINK'}
{id: 10, action: 'URL', type: 'LINK'}
{id: 11, action: 'Event', type: 'LINK'}
{id: 12, action: 'Contact Card', type: 'LINK'}
{id: 13, action: 'SMS', type: 'LINK'}
{id: 2, action: 'Call', type: 'PHONE'}
{id: 14, action: 'Email', type: 'EMAIL'}
*/

export const ACTIONS: ActionsType[] = [
  {
    fieldTitle: "Social Card",
    fields: [
      {
        name: "Profile Image",
        type: "file",
        formKey: "profileImage",
      },
      {
        name: "Name",
        type: "text",
        formKey: "name",
      },
      {
        name: "Title",
        type: "text",
        formKey: "title",
      },
      {
        name: "Email",
        type: "text",
        formKey: "email",
      },
      {
        name: "Meeting Link",
        type: "text",
        formKey: "meetingLink",
      },
      {
        name: "Phone",
        type: "text",
        formKey: "phone",
      },
      {
        name: "PhoneCode",
        type: "text",
        formKey: "phoneCode",
      },
      {
        name: "Text",
        type: "text",
        formKey: "text",
      },
      {
        name: "Website",
        type: "text",
        formKey: "website",
      },
      {
        name: "WhatsApp",
        type: "text",
        formKey: "whatsappMessage",
      },
      {
        name: "Facebook",
        type: "text",
        formKey: "facebook",
      },
      {
        name: "Instagram",
        type: "text",
        formKey: "instagram",
      },
      {
        name: "Linkedin",
        type: "text",
        formKey: "linkedin",
      },
      {
        name: "Pinterest",
        type: "text",
        formKey: "pinterest",
      },
      {
        name: "Snapchat",
        type: "text",
        formKey: "snapchat",
      },
      {
        name: "Telegram",
        type: "text",
        formKey: "telegram",
      },
      {
        name: "Tiktok",
        type: "text",
        formKey: "tiktok",
      },
      {
        name: "Twitch",
        type: "text",
        formKey: "twitch",
      },
      {
        name: "Twitter",
        type: "text",
        formKey: "twitter",
      },
      {
        name: "Vimeo",
        type: "text",
        formKey: "vimeo",
      },
      {
        name: "Youtube",
        type: "text",
        formKey: "youtube",
      },
    ],
  },
  {
    fieldTitle: "WhatsApp",
    fields: [
      {
        name: "Phone Code",
        type: "text",
        formKey: "phoneCode",
      },
      {
        name: "Phone",
        type: "text",
        formKey: "phone",
      },
      {
        name: "Message",
        type: "long-text",
        formKey: "whatsappMessage",
      },
    ],
  },
  {
    fieldTitle: "URL",
    fields: [
      {
        name: "URL",
        type: "url",
        formKey: "url",
      },
    ],
  },
  {
    fieldTitle: "Link tree",
    fields: [],
  },
  {
    fieldTitle: "Event",
    fields: [
      {
        name: "Event Image",
        type: "file",
        formKey: "profileImage",
      },
      {
        name: "Event Name",
        type: "text",
        formKey: "title",
      },
      {
        name: "Start Date",
        type: "date",
        formKey: "startDate",
      },
      {
        name: "End Date",
        type: "date",
        formKey: "endDate",
      },
      {
        name: "Event Venue",
        type: "text",
        formKey: "location",
      },
      // {
      //   name: "Postal Code",
      //   type: "text",
      //   formKey: "postalCode",
      // },
      {
        name: "Country",
        type: "country-select",
        options: getCountries(),
        formKey: "countryId",
      },
      {
        name: "State",
        type: "state-select",
        // options: getStatesList("NG"),
        formKey: "provinceId",
      },
      {
        name: "City",
        type: "text",
        formKey: "homeCity",
      },
      {
        name: "Url",
        type: "url",
        formKey: "url",
      },
      {
        name: "Description",
        type: "long-text",
        formKey: "about",
      },
    ],
  },
  {
    fieldTitle: "Contact Card",
    fields: [
      {
        name: "Profile Image",
        type: "file",
        formKey: "profileImage",
      },
      // {
      //   name: "Title",
      //   type: "text",
      //   formKey: "title",
      // },
      {
        name: "Full Name",
        type: "text",
        formKey: "name",
      },
      {
        name: "Company",
        type: "text",
        formKey: "company",
      },
      {
        name: "Position",
        type: "text",
        formKey: "title",
      },
      // {
      //   name: "Birthday",
      //   type: "date",
      //   formKey: "birthday",
      // },
      // {
      //   name: "Home Phone",
      //   type: "text",
      //   formKey: "homePhone",
      // },
      // {
      //   name: "Office Phone",
      //   type: "text",
      //   formKey: "officePhone",
      // },
      {
        name: "Personal Phone Number",
        type: "text",
        formKey: "personalPhone",
      },
      // {
      //   name: "Office Fax",
      //   type: "text",
      //   formKey: "officeFax",
      // },
      {
        name: "Alternative phone number",
        type: "text",
        formKey: "altPhone",
      },
      {
        name: "Work Email",
        type: "email",
        formKey: "workEmail",
      },
      {
        name: "Personal Email",
        type: "email",
        formKey: "personalEmail",
      },
      {
        name: "Personal/Work Website",
        type: "url",
        formKey: "website1",
      },
      // {
      //   name: "Website 2",
      //   type: "url",
      //   formKey: "website2",
      // },
      // {
      //   name: "Payment Link",
      //   type: "url",
      //   formKey: "paymentLink",
      // },
      // {
      //   name: "Home address",
      //   type: "text",
      //   formKey: "homeAddress",
      // },
      {
        name: "Home/office address",
        type: "text",
        formKey: "officeAddress",
      },
      // {
      //   name: "Home Postal Code",
      //   type: "text",
      //   formKey: "homePostalCode",
      // },
      // {
      //   name: "Office Postal Code",
      //   type: "text",
      //   formKey: "officePostalCode",
      // },
      // {
      //   name: "Home Country",
      //   type: "country-select",
      //   options: getCountries(),
      //   formKey: "homeCountryId",
      // },
      // {
      //   name: "Home State",
      //   type: "state-select",
      //   formKey: "homeStateId",
      // },
      // {
      //   name: "Home City",
      //   type: "text",
      //   formKey: "homeCity",
      // },
      // {
      //   name: "Office Country",
      //   type: "country-select",
      //   options: getCountries(),
      //   formKey: "officeCountryId",
      // },
      // {
      //   name: "Office State",
      //   type: "state-select",
      //   formKey: "officeStateId",
      // },
      // {
      //   name: "Office City",
      //   type: "text",
      //   formKey: "officeCity",
      // },
      // {
      //   name: "Theme",
      //   type: "color",
      //   formKey: "theme",
      // },
    ],
  },
  {
    fieldTitle: "SMS",
    requiresCountryCode:
      'Notice: Please put your country code before your number. For example: "+1".',
    fields: [
      {
        name: "Phone Code",
        type: "text",
        formKey: "phoneCode",
      },
      {
        name: "Phone Number",
        type: "text",
        formKey: "phone",
      },
      {
        name: "Text",
        type: "long-text",
        formKey: "text",
      },
    ],
  },
  {
    fieldTitle: "Call",
    fields: [
      {
        name: "Phone Code",
        type: "text",
        formKey: "phoneCode",
      },
      {
        name: "Phone number",
        type: "text",
        formKey: "phone",
      },
    ],
  },
  {
    fieldTitle: "Email",
    fields: [
      {
        name: "Email",
        type: "email",
        formKey: "email",
      },
      {
        name: "Subject",
        type: "text",
        formKey: "subject",
      },
      {
        name: "Content",
        type: "long-text",
        formKey: "content",
      },
    ],
  },
  {
    fieldTitle: "Bank Account",
    fields: [
      {
        name: "Name",
        type: "text",
        formKey: "bankAccountName",
      },
      {
        name: "Account Number",
        type: "text",
        formKey: "bankAccountNumber",
      },
      {
        name: "Bank Name",
        type: "bank-select",
        formKey: "bankName",
      },
    ],
  },
  {
    fieldTitle: "Registration Form",
    actionCategory: "LEAD_FORM",
    fields: [],
  },
  {
    fieldTitle: "Sales Form",
    actionCategory: "LEAD_FORM",
    fields: [],
  },
  {
    fieldTitle: "Coming soon Form",
    actionCategory: "LEAD_FORM",
    fields: [],
  },
  {
    fieldTitle: "Consultation Form",
    actionCategory: "LEAD_FORM",
    fields: [],
  },
];

export const SOCIAL_LINKS: ActionsFormType = {
  // "Contact Info": [
  //   {
  //     id: 1,
  //     label: "Text",
  //     image: SmsIcon,
  //     link: "sms:${phoneCode}${phone}?body=${text}",
  //     // fields: ["Number", "Text"],
  //   },
  //   {
  //     id: 3,
  //     label: "Phone",
  //     image: CallIcon,
  //     link: "tel:${phoneCode}${phone}",
  //   },
  //   {
  //     id: 4,
  //     label: "WhatsApp",
  //     image: WhatsappIcon,
  //     link: "https://wa.me/${phoneCode}${phone}?text=${text}",
  //   },
  //   {
  //     id: 5,
  //     label: "Meeting Link",
  //     image: FacetimeIcon,
  //   },
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
  // ],
  social: [
    {
      id: 1,
      label: "Text",
      image: SmsIcon,
      link: "sms:${phoneCode}${phone}?body=${text}",
      // fields: ["Number", "Text"],
    },
    {
      id: 2,
      label: "Phone",
      image: CallIcon,
      link: "tel:${phoneCode}${phone}",
    },
    {
      id: 15,
      label: "Email",
      image: EmailIcon,
      link: "mailto:${email}",
    },
    {
      id: 4,
      label: "Meeting Link",
      image: FacetimeIcon,
      link: "${link}",
    },
    {
      id: 3,
      label: "WhatsApp",
      image: WhatsappIcon,
      link: "https://wa.me/${phoneCode}${phone}?text=${text}",
    },
    {
      id: 5,
      label: "Instagram",
      image: InstagramIcon,
      link: "https://instagram.com/${user}?igshid=YmMyMTA2M2Y=",
    },
    {
      id: 6,
      label: "Facebook",
      image: FacebookIcon,
      link: "https://www.facebook.com/${user}/",
    },
    {
      id: 7,
      label: "Twitter",
      image: TwitterIcon,
      link: "https://twitter.com/${user}?s=21&t=5NTWX9KJ3B_ZA_RMxzaJDw",
    },
    {
      id: 8,
      label: "Tiktok",
      image: TiktokIcon,
      link: "https://www.tiktok.com/@${user}?_t=8Wy0PdOVQBB&_r=1",
    },
    {
      id: 9,
      label: "Youtube",
      image: YoutubeIcon,
      link: "https://youtube.com/@${user}",
    },
    {
      id: 10,
      label: "Pinterest",
      image: PinterestIcon,
      link: "https://www.pinterest.com/${user}/",
    },
    {
      id: 11,
      label: "Linkedin",
      image: LinkedInIcon,
      link: "https://www.linkedin.com/in/${user}",
    },
    {
      id: 12,
      label: "Snapchat",
      image: SnapchatIcon,
      link: "https://www.snapchat.com/add/${user}",
    },
    {
      id: 13,
      label: "Vimeo",
      image: VimeoIcon,
      link: "https://vimeo.com/${user}",
    },
    {
      id: 14,
      label: "Twitch",
      image: TwitchIcon,
      link: "https://www.twitch.tv/${user}",
    },
    // {
    //   id: 8,
    //   label: "Telegram",
    //   image: TelegramIcon,
    //   link: 'Vivian.vcf',
    // },
  ],
  // "For Business": [
  // {
  //   id: 2,
  //   label: "Calendly",
  //   image: CalendlyIcon,
  //   pro: true,
  // },
  // {
  //   id: 3,
  //   label: "Yelp",
  //   image: YelpIcon,
  //   pro: true,
  // },
  // {
  //   id: 4,
  //   label: "Trip Advisor",
  //   image: TripAdvicerIcon,
  //   pro: true,
  // },
  // ],
  // Payment: [
  //   {
  //     id: 1,
  //     label: "Bank Details",
  //     image: BankIcon,
  //   },
  //   {
  //     id: 2,
  //     label: "Cash App",
  //     image: CashAppIcon,
  //   },
  //   {
  //     id: 3,
  //     label: "Paypal",
  //     image: PaypalIcon,
  //   },
  //   {
  //     id: 4,
  //     label: "Zelle",
  //     image: ZelleIcon,
  //   },
  //   {
  //     id: 5,
  //     label: "Abeg",
  //     image: AbegIcon,
  //   },
  //   {
  //     id: 6,
  //     label: "Venmo",
  //     image: VenmoIcon,
  //   },
  //   {
  //     id: 7,
  //     label: "Patreon",
  //     image: PatreonIcon,
  //   },
  // ],
  // "Music Links": [
  //   {
  //     id: 1,
  //     label: "Spotify",
  //     image: SpotifyIcon,
  //   },
  //   {
  //     id: 2,
  //     label: "Apple Music",
  //     image: AppleMusicIcon,
  //   },
  //   {
  //     id: 3,
  //     label: "Sound Cloud",
  //     image: SoundcloudIcon,
  //   },
  //   {
  //     id: 4,
  //     label: "Apple Podcast",
  //     image: ApplePodcastIcon,
  //     pro: true,
  //   },
  //   {
  //     id: 6,
  //     label: "Deezer",
  //     image: DeezerIcon,
  //   },
  //   {
  //     id: 7,
  //     label: "Boom Play",
  //     image: BoomPlayIcon,
  //   },
  //   {
  //     id: 8,
  //     label: "Audio Mack",
  //     image: AudioMackIcon,
  //   },
  // ],
};

export const linkTrees = [
  {
    id: 1,
    title: "Instagram",
    icon: AiOutlineInstagram,
  },
  {
    id: 2,
    title: "Facebook",
    icon: AiOutlineFacebook,
  },
  {
    id: 3,
    title: "Twitter",
    icon: FiTwitter,
  },
  {
    id: 4,
    title: "LinkedIn",
    icon: AiOutlineLinkedin,
  },
  {
    id: 5,
    title: "Website",
    icon: TbWorld,
  },
  {
    id: 6,
    title: "Whatsapp",
    icon: AiOutlineWhatsApp,
  },
];

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

export const NumberFields: string[] = [
  "phone",
  "altPhone",
  "homePhone",
  "workPhone",
  "officePhone",
  "personalPhone",
  "bankAccountNumber",
];
