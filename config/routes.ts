import { MainNavItem, SidebarNavItem } from "@/types/nav";
import { projectItems } from "./projects";

interface RoutesConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const routesConfig: RoutesConfig = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/About",
    },
    {
      title: "GitHub",
      href: "#",
      external: true,
    },
    {
      title: "Twitter",
      href: "#",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Projects",
      items: projectItems,
    },
  ],
};
