export enum ProductColors {
  Black = "Black",
  Sandtone = "Sandtone",
}

export enum ProductStyle {
  PLAIN = "PLAIN",
  CUSTOMIZED = "CUSTOMIZED",
}

export interface CommunityImage {
  src: string;
  instagramLink: string;
  displayInMobile: boolean;
  imgAlt: string;
}

export const CommunityImages: CommunityImage[] = [
  {
    src: "https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/303800706_1199995184066215_7149009206166660429_n.jpg?stp=dst-jpg_e15_fr_p1080x1080&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=gNB4r3bPSBUAX-bLj75&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNzA5OTUyMDgzMzAzNjc2MA%3D%3D.2-ccb7-5&oh=00_AT9XhNBRuUtxWn4F2frHHwFSwrHHcxvgKl-cQ6sPyM6y9g&oe=63187645&_nc_sid=30a2ef 1080w,https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/303800706_1199995184066215_7149009206166660429_n.jpg?stp=dst-jpg_e35_p750x750_sh0.08&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=gNB4r3bPSBUAX-bLj75&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNzA5OTUyMDgzMzAzNjc2MA%3D%3D.2-ccb7-5&oh=00_AT-nms80COxBnFnHytm6UZ09IctN7m6fPVRV9yBcAkzaig&oe=63187645&_nc_sid=30a2ef 750w,https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/303800706_1199995184066215_7149009206166660429_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=gNB4r3bPSBUAX-bLj75&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNzA5OTUyMDgzMzAzNjc2MA%3D%3D.2-ccb7-5&oh=00_AT9O6Kk0TvS5YlSK7EiuayL1ksO7aP3M-lw_91pXpejvfg&oe=63187645&_nc_sid=30a2ef 640w,https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/303800706_1199995184066215_7149009206166660429_n.jpg?stp=dst-jpg_e15_p480x480&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=gNB4r3bPSBUAX-bLj75&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNzA5OTUyMDgzMzAzNjc2MA%3D%3D.2-ccb7-5&oh=00_AT-o4_QuwJclTap0KXTttRRCgWZ_p7aJN_cRyBwpozWGSA&oe=63187645&_nc_sid=30a2ef 480w,https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/303800706_1199995184066215_7149009206166660429_n.jpg?stp=dst-jpg_e15_p320x320&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=gNB4r3bPSBUAX-bLj75&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNzA5OTUyMDgzMzAzNjc2MA%3D%3D.2-ccb7-5&oh=00_AT9dHn_s_K9yVgbi8CVehgLP4Vdn2K7yX7-yp5SBL_pTvg&oe=63187645&_nc_sid=30a2ef 320w,https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/303800706_1199995184066215_7149009206166660429_n.jpg?stp=dst-jpg_e15_p240x240&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=gNB4r3bPSBUAX-bLj75&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkxNzA5OTUyMDgzMzAzNjc2MA%3D%3D.2-ccb7-5&oh=00_AT9YDcb0B9itQCDA1G9gWN2d9FmfKGrgMSiMJyiPpCDCug&oe=63187645&_nc_sid=30a2ef 240w",
    instagramLink: "https://www.instagram.com/p/Ch7no8JtyHY/",
    displayInMobile: true,
    imgAlt: "Introducing a cost effective option: Hardsands",
  },
  {
    src: "https://instagram.flos3-2.fna.fbcdn.net/v/t51.2885-15/300002147_1093334721619903_784864266675290418_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flos3-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=Zjkl7-pptjwAX86qAka&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=MjkwNzUxNjgwMTk0MTAyNzQyNQ%3D%3D.2-ccb7-5&oh=00_AT80YFYXgarVQpHJfhgna9xbhCVcrRyN8WNEC9JYVj2YFg&oe=63185FF0&_nc_sid=30a2ef",
    instagramLink: "https://www.instagram.com/p/ChZkyBuLLph/",
    displayInMobile: true,
    imgAlt: "The evolution to digital business cards",
  },
  {
    src: "https://instagram.flos3-1.fna.fbcdn.net/v/t51.2885-15/297221947_170410295548249_3191065344030653931_n.jpg?stp=dst-jpg_e35&_nc_ht=instagram.flos3-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Qu1wJh4C6UoAX--T5z3&edm=ALQROFkBAAAA&ccb=7-5&ig_cache_key=Mjg5NjYwOTQxOTY1NjY1MzY2Ng%3D%3D.2-ccb7-5&oh=00_AT88OCHVICpvCiB8ZgQH4F5DrpzX2VEUzO8Ht8jR1bDBQQ&oe=631721A5&_nc_sid=30a2ef",
    instagramLink: "https://www.instagram.com/hardsandscard/",
    displayInMobile: true,
    imgAlt:
      "It could be frustrating to constantly hand out your business card every-time.",
  },
];
