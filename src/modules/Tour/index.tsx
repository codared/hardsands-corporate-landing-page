import React, { useEffect, useState } from "react";
import { colors } from "styles/theme";
import Tour from "reactour";

// export const tourConfig = [
//   {
//     delay: 30000,
//     selector: '[id="data-tut-epoxy-tag-black"]',
//     content: "Welcome! Show see list of cards you have purchased",
//   },
//   {
//     delay: 30000,
//     selector: '[id="data-tut"]',
//     content: "Click a card you want to make changes too",
//   },
// ];
export const tourActionConfig = [
  {
    delay: 30000,
    selector: '[id="add-action-button"]',
    content:
      "Action is what your receiver sees when they tap/scan your card. click “Add action” to get started.",
  },
  {
    delay: 30000,
    selector: '[id="add-action-button"]',
    content:
      "Action is what your receiver sees when they tap/scan your card. click “Add action” to get started. Choose an action from the list",
  },
];
export const tourSelectActionConfig = [
  {
    delay: 30000,
    selector: '[id="tour-select-action"]',
    content:
      "Choose action you want your receiver to see when they tap/scan your card",
  },
  {
    delay: 30000,
    selector: '[id="tour-select-action"]',
    content:
      "Choose action you want your receiver to see when they tap/scan your card",
  },
];

export const tourActionScreenConfig = [
  {
    delay: 30000,
    selector: '[id="ACTIONS"]',
    content: "View your card actions",
  },
  {
    delay: 30000,
    selector: '[id="ACTIONS"]',
    content: "View your card actions",
  },
  {
    delay: 30000,
    selector: '[id="STATS"]',
    content:
      "View your card Statistics, how many times your card has been viewed or used",
  },
  {
    delay: 30000,
    selector: '[id="data-tut-qr-code-share"]',
    content:
      "Scan directly from your phone or Copy the card link to share via chat, e.t.c.",
  },
];

export const styleConfig = {
  badge: (base: any) => ({
    ...base,
    background: colors.brand["300"],
  }),
  dot: (base: any) => ({
    ...base,
    background: colors.brand["300"],
  }),
};
