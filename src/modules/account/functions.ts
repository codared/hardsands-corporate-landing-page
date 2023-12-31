import { DASH_ROOT, routeId, SOCIAL_LINKS } from "./constants";
import { camelCase as loCamelCase } from "lodash";
import { LinkTreeType } from "./types";
import { HARDSANDS_CORPERATE } from "modules/authentication/constants";
import { getCookie, setCookie } from "modules/shared/cookie";

export const findSameSocials = (item: any, findingArray: any[]) => {
  return findingArray.find((finding) => finding.name === item.label);
};

export const camelCase = (str: string): string => {
  // If the social label is whatsapp, then we need to get the whatsappMessage
  if (loCamelCase(str) === "whatsApp") {
    return "whatsappMessage";
  }
  return loCamelCase(str);
};

// Get social Icons for display
export const getSocialIcons = (socialLink: string, rest: any) => {
  return (SOCIAL_LINKS[socialLink] as any[]).map((social) => {
    if (rest[camelCase(social.label)]) {
      return {
        ...social,
        user: rest[camelCase(social.label)],
      };
    }
    return undefined;
  });
};

export const needsPhoneCode = (item: string) => {
  return [
    "phoneCode",
    "phone",
    "text",
    "whatsapp",
    "whatsappmessage",
    "telegram",
  ].includes(item);
};

export const getSocialEditIcons = (socialLink: string, rest: any) => {
  return (SOCIAL_LINKS[socialLink] as any[]).map((social) => {
    return {
      ...social,
      user: rest[camelCase(social.label)],
    };
  });
};

export const getSocialLink = (
  item: any,
  phoneCode?: string,
  phone?: string
) => {
  if (item.user.includes("http") || item.user.includes("www")) {
    return item.user;
  }
  return (
    item.link
      .replace("${user}", item.user)
      .replace("${phoneCode}", phoneCode)
      .replace("${phone}", phone || item.user)
      .replace("${email}", item.user)
      .replace("${link}", item.user)
      .replace("${text}", item.user) || "#"
  );
};

export const NotFoundErrorMessage = (errorMessage: string | any) => {
  return errorMessage.includes("NotFoundError") ? "Failed Error" : errorMessage;
};

export const isEmptyObject = (obj: any) => {
  return JSON.stringify(obj) === "{}";
};

export const getFileExtension = (filename: string) => {
  if (filename) {
    return filename.split(".").pop();
  }
  return "";
};

/*
 * Replaces non-alphanumeric characters in a string with `replacementChar`
 */
export const slugify = (str: string, replacementChar = "-") => {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]+/g, replacementChar);
};

export const resolveRoute = (companyRoute: string, slug?: string) => {
  let route = DASH_ROOT.replace(routeId, companyRoute);
  if (slug) {
    route = `${route}${slug}`;
  }
  return route;
};

export const getOnlyActions = (actions: any) => {
  return actions.map((action: any) => action.action);
};

// Update the values of the local storage HARDSANDS_CORPERATE with the new values
export const updateLocalStorage = (key: string, value: any) => {
  const localData = JSON.parse(getCookie(HARDSANDS_CORPERATE)!);
  localData[key] = value;
  setCookie(HARDSANDS_CORPERATE, JSON.stringify(localData));
};

export const monthClicks = () => {
  const month = new Date().getMonth();

  const monthlyClicks = [
    {
      month: "Jan",
      numberOfClicks: "58",
      bgColor: month === 0 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Feb",
      numberOfClicks: "142",
      bgColor: month === 1 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Mar",
      numberOfClicks: "98",
      bgColor: month === 2 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Apr",
      numberOfClicks: "112",
      bgColor: month === 3 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "May",
      numberOfClicks: "90",
      bgColor: month === 4 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Jun",
      numberOfClicks: "161",
      bgColor: month === 5 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Jul",
      numberOfClicks: "78",
      bgColor: month === 6 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Aug",
      numberOfClicks: "142",
      bgColor: month === 7 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Sep",
      numberOfClicks: "39",
      bgColor: month === 8 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Oct",
      numberOfClicks: "112",
      bgColor: month === 9 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Nov",
      numberOfClicks: "63",
      bgColor: month === 10 ? "#DF9F71" : "#f7f7f7",
    },
    {
      month: "Dec",
      numberOfClicks: "98",
      bgColor: month === 11 ? "#DF9F71" : "#f7f7f7",
    },
  ];
  return monthlyClicks;
};

export const exceptionIconTitle = (title: string) => {
  if (title === "Meeting Link") {
    return "Calendar Link";
  } else {
    return title;
  }
};

export const exceptionLabels = (label: string) => {
  if (label === "Meeting Link") {
    return "Add Your shareable Calendar Link";
  } else if (label === "Email") {
    return "Enter Email Address";
  } else {
    return `Add ${label} to Social Profile*`;
  }
};

export const exceptionPlaceholders = (label: string) => {
  if (label === "Meeting Link") {
    return "Enter Calendar link";
  } else if (label === "Linkedin") {
    return "Enter Linkedin Username";
  } else {
    return `Enter ${label} Info`;
  }
};
