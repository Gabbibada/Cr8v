import { SiteHeader } from "@/components/layout/site-header";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-12 sm:px-6">{children}</main>
    </>
  );
}
