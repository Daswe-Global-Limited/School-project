import React from "react";
import {FaWeixin,
  FaPhone,
  FaInternetExplorer,
  FaMailBulk,
} from "react-icons/fa";

export const footerData = {
  footerLine2: {
    title: "Quick Links",
    data: [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/schools",
        title: "Schools",
      },
      {
        path: "/about",
        title: "About",
      },
      {
        path: "/team",
        title: "Team",
      },
      {
        path: "/admission",
        title: "Admission",
      },
    ],
  },

  footerLine3: {
    title: "Schools",
    data: [
      {
        path: "/",
        title: "SCHOOL 1",
      },
      {
        path: "/",
        title: "SCHOOL 2",
      },
      {
        path: "/",
        title: "SCHOOL 3",
      },
      {
        path: "/",
        title: "SCHOOL 4",
      },
      {
        path: "/",
        title: "SCHOOL 5",
      },
    ],
  },

  footerLine4: {
    title: "Contact Us",
    availableData: [
      {
        path: "https://google.com",
        title: "www.futureschool.com",
        icon: <FaInternetExplorer />,
      },
      {
        path: "https://google.com",
        title: "futureschool@gmail.com",
        icon: <FaMailBulk />,
      },
      {
        path: "https://google.com",
        title: "+2348100805056",
        icon: <FaPhone />,
      },
      {
        path: "https://google.com",
        title: "Chat with admin",
        icon: <FaWeixin />,
      },
    ],
  },
};
