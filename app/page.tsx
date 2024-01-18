import { Icons } from "@/components/icons";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between h-full">
      <div className="mt-24 container">
        <PageHeader>
          {/* <Announcement /> */}
          <PageHeaderHeading>Just testing out cool stuffs</PageHeaderHeading>
          <PageHeaderDescription>
            Just a template app for testing out some mainstream and trending
            stuffs for React. Come join in!
          </PageHeaderDescription>
          <PageActions>
            <Link href="#" className={cn(buttonVariants())}>
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={cn(buttonVariants({ variant: "outline" }))}
            >
              <Icons.gitHub className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </PageActions>
        </PageHeader>
      </div>
    </main>
  );
}
