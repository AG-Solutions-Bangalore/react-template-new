import {
    IconAperture,
    IconCopy,
    IconLayoutDashboard,
    IconLogin,
    IconMoodHappy,
    IconTypography,
    IconUserPlus,
  } from "@tabler/icons-react";
  
  import { uniqueId } from "lodash";
  
  const Menuitems = [
    {
      navlabel: true,
      subheader: "Home",
    },
  
    {
      id: uniqueId(),
      title: "Dashboard",
      icon: IconLayoutDashboard,
      href: "/home",
    },
    {
      id: uniqueId(),
      title: "Form",
      icon: IconLayoutDashboard,
      href: "/form",
    },
    {
      navlabel: true,
      subheader: "Utilities",
    },
    {
      id: uniqueId(),
      title: "Table",
      icon: IconTypography,
      href: "/table",
    },
    {
      id: uniqueId(),
      title: "TableNew",
      icon: IconCopy,
      href: "/table-one",
    },
    {
      id: uniqueId(),
      title: "FormView",
      icon: IconCopy,
      href: "/formview",
    },
    {
      navlabel: true,
      subheader: "Auth",
    },
    {
      id: uniqueId(),
      title: "Login",
      icon: IconLogin,
      href: "/",
    },
    {
      id: uniqueId(),
      title: "Register",
      icon: IconUserPlus,
      href: "/authentication/register",
    },
    {
      navlabel: true,
      subheader: "Extra",
    },
    {
      id: uniqueId(),
      title: "Icons",
      icon: IconMoodHappy,
      href: "/icons",
    },
    {
      id: uniqueId(),
      title: "Sample Page",
      icon: IconAperture,
      href: "/sample-page",
    },
  ];
  
  export default Menuitems;
  