import { cn } from "@/lib/utils";
import {
  ArrowDown,
  ArrowUp,
  Check,
  ChevronsUpDown,
  Circle,
  EyeOff,
  File,
  Github,
  Laptop,
  Link,
  LucideProps,
  Menu,
  Moon,
  MoreHorizontal,
  PlusCircle,
  Radiation,
  Sun,
  Twitter,
  XCircle,
} from "lucide-react";

type IconProps = LucideProps;

export const Icons = {
  logo: (props: IconProps) => <Radiation {...props} />,
  menu: (props: IconProps) => <Menu {...props} />,
  dotMenuHorizontal: (props: IconProps) => <MoreHorizontal {...props} />,
  twitter: (props: IconProps) => <Twitter {...props} />,
  gitHub: (props: IconProps) => <Github {...props} />,
  circle: (props: IconProps) => <Circle {...props} />,
  plusCircle: (props: IconProps) => <PlusCircle {...props} />,
  crossCircle: (props: IconProps) => <XCircle {...props} />,
  check: (props: IconProps) => <Check {...props} />,
  link: (props: IconProps) => <Link {...props} />,
  file: (props: IconProps) => <File {...props} />,
  laptop: (props: IconProps) => <Laptop {...props} />,
  arrowUp: (props: IconProps) => <ArrowUp {...props} />,
  arrowDown: (props: IconProps) => <ArrowDown {...props} />,
  eyeOff: (props: IconProps) => <EyeOff {...props} />,
  chevronSort: (props: IconProps) => <ChevronsUpDown {...props} />,
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
