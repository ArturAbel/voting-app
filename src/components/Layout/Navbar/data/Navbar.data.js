import { LINK } from "../../../../constants/navigation";

export const NAVBAR_LINKS = [
  { to: `/${LINK.POLL_BOARD}`, text: "Poll Board" },
  { to: `/${LINK.MY_POLLS}`, text: "My Polls" },
  { to: `/${LINK.PUBLIC_POLLS}`, text: "Public Polls" },
];

export const SETTING_LINKS = [
  {
    to: `/${LINK.SETTINGS}`,
    text: "Settings",
  },
  {
    to: `/${LINK.ABOUT}`,
    text: "About Us",
  },
  {
    to: `/${LINK.ADMIN}`,
    text: "Admin",
  },
];
