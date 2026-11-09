import Image from "next/image";
import { Logo } from "@/components/layout/logo";
import { ChatTag } from "@/components/marketing/chat-tag";
import { proImages } from "@/components/marketing/images";

export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="grid flex-1 gap-3 p-3 lg:grid-cols-2">
      <div className="flex flex-col px-3 py-4 sm:px-8">
        <Logo />
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center py-12">{children}</div>
      </div>
      <div className="relative hidden overflow-hidden rounded-[2rem] lg:block">
        <Image src={proImages.hairSalon} alt="" fill sizes="50vw" placeholder="blur" preload className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <ChatTag tone="lime" className="top-10 left-10 rotate-[-4deg]">
          Booked for Saturday, 10am
        </ChatTag>
        <div className="absolute inset-x-0 bottom-0 p-10 text-white">
          <p className="text-display max-w-md text-4xl">Good work, found locally, paid safely.</p>
          <p className="mt-3 text-white/75">Doncaster · Sheffield · Manchester</p>
        </div>
      </div>
    </div>
  );
}
