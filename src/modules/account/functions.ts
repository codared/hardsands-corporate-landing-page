import { DASH_ROOT, routeId, SOCIAL_LINKS } from "./constants";

export const findSameSocials = (item: any, findingArray: any[]) => {
  return findingArray.find((finding) => finding.name === item.label);
};

// Get social Icons for display
export const getSocialIcons = (socialLink: string, rest: any) => {
  return (SOCIAL_LINKS[socialLink] as any[]).map((social) => {
    if (rest[social.label.toLowerCase()]) {
      return {
        ...social,
        user: rest[social.label.toLowerCase()],
      };
    }
    return undefined;
  });
};

export const getSocialEditIcons = (socialLink: string, rest: any) => {
  return (SOCIAL_LINKS[socialLink] as any[]).map((social) => {
    return {
      ...social,
      user: rest[social.label.toLowerCase()],
    };
  });
};

export const getSocialLink = (item: any) => {
  if (item.user.includes("http") || item.user.includes("www")) {
    return item.user;
  }
  return (
    item.link
      .replace("${user}", item.user)
      .replace("${phone}", item.user)
      .replace("${text}", item.user)
      .replace("${phoneCode}", item.user) || "#"
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
