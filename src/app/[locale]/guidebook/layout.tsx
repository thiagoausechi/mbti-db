import { Main } from "~/client/components/ui/content";

export default function GuidebookLayout({
  children,
}: LayoutProps<"/[locale]/guidebook">) {
  return <Main>{children}</Main>;
}
