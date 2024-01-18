import { cn } from "@/lib/utils";
import {
  Circle,
  File,
  Github,
  Laptop,
  Link,
  LucideProps,
  Menu,
  Moon,
  Radiation,
  Sun,
  Twitter,
} from "lucide-react";

type IconProps = LucideProps;

export const Icons = {
  logo: (props: IconProps) => <Radiation {...props} />,
  menu: (props: IconProps) => <Menu {...props} />,
  twitter: (props: IconProps) => <Twitter {...props} />,
  gitHub: (props: IconProps) => <Github {...props} />,
  circle: (props: IconProps) => <Circle {...props} />,
  link: (props: IconProps) => <Link {...props} />,
  file: (props: IconProps) => <File {...props} />,
  laptop: (props: IconProps) => <Laptop {...props} />,
  moon: (props: IconProps) => (
    <Moon
      className={cn(
        "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100",
        props.className
      )}
      {...props}
    />
  ),
  sun: (props: IconProps) => (
    <Sun
      className={cn(
        "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0",
        props.className
      )}
      {...props}
    />
  ),
};
