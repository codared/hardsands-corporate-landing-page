import { SOCIAL_LINKS } from "./constants";

export const findSameSocials = (item: any, findingArray: any[]) => {
  return findingArray.find((finding) => finding.name === item.label);
};

// Get social Icons for display
export const getSocialIcons = (rest: any) => {
  return (SOCIAL_LINKS.social as any[]).map((social) => {
    if (rest[social.label.toLowerCase()]) {
      return {
        ...social,
        user: rest[social.label.toLowerCase()],
      };
    }
    return undefined;
  });
};

export const getSocialEditIcons = (rest: any) => {
  return (SOCIAL_LINKS.social as any[]).map((social) => {
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
  return item.link.replace("${user}", item.user) || "#";
};

export const NotFoundErrorMessage = (errorMessage: string | any) => {
  return errorMessage.includes("NotFoundError")
    ? "Failed Error"
    : "Something went wrong.";
};
