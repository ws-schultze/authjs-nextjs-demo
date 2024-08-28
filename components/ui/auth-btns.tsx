import { signIn, signOut } from "@/auth";
import { PrimaryBtn } from "./primary-btn";

interface SignInBtnProps {
  provider: string;
  children: React.ReactNode;
}

export function SignIn({ provider, children }: SignInBtnProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signIn(provider);
      }}
    >
      <PrimaryBtn>{children}</PrimaryBtn>
    </form>
  );
}

interface SignOutBtnProps {
  children: React.ReactNode;
  props?: React.ComponentPropsWithRef<typeof PrimaryBtn>;
}

export function SignOut({ children }: SignOutBtnProps) {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className="w-full"
    >
      <PrimaryBtn>{children}</PrimaryBtn>
    </form>
  );
}
