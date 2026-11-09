import { SiteHeader } from "@/components/layout/site-header";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <>
      <SiteHeader />
      <main className="w-full flex-1 px-4 py-12 sm:px-6 lg:px-10">{children}</main>
    </>
  );
}
