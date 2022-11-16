import buildRoutes from "../shared/buildRoutes";

const staticRoutes = buildRoutes("/", {
  // Sample routes
  // TODO: move these somewhere else
  /* Simplest case using a single placeholder */
  // single: routeFromUrl<{ id: number }>('single/[id]'),

  /* Route with multiple placeholder */
  // multiple: routeFromUrl<{ id: number; size: string }>('multiple/[id]/[size]'),

  /* For more complex requirements, you can specify your own function. The
   * parameter is always optional. If it's not passed, the function should
   * return the route with placeholders. */
  // manualFunction: (item?: { id: number }) => (
  //   item ? `details/${item.id}` : 'details/[id]'
  // ),

  about: "/about",
  faq: "/faq",
  privacyPolicy: "/privacy-policy",
  termsOfService: "/terms-of-service",
  returnPolicy: "/return-policy",
  howToUse: "/article/how-to-use",
  whyYouNeed: "/article/why-you-need-hardsands-digital-business-card",
  requestPersonalData: "/request-personal-data",
  blogs: "/blogs",
  giftCard: "/gift-card",
  accessibility: "/accessibility",
  customerSupport: "mailto:info@hardsands.com",
});

export default staticRoutes;
