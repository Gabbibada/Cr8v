import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/auth";
import { UserMenu } from "./user-menu";

// Reads the session — render inside <Suspense>.
export async function UserNav() {
  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="flex items-center gap-2">
        <Button variant="ghost" asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button asChild>
          <Link href="/sign-up">Join</Link>
        </Button>
      </div>
    );
  }

  return <UserMenu displayName={user.displayName} email={user.email} avatarUrl={user.avatarUrl} />;
}
