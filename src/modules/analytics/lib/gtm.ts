declare global {
  interface Window {
    dataLayer: any;
  }
}

export const pageview = (url: string) => {
  window &&
    typeof window !== "undefined" &&
    window?.dataLayer.push({
      event: "pageview",
      page: url,
    });
};
