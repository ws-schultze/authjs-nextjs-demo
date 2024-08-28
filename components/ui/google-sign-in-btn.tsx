import Image from "next/image";
import { PrimaryBtn } from "./primary-btn";
import GoogleLogo from "@/public/google-logo.svg";
import { signIn } from "next-auth/react";
import { SignIn } from "./auth-btns";
import { auth } from "@/auth";

export function GoogleSignInBtn() {
  return (
    <SignIn provider="google">
      <Image
        src={GoogleLogo}
        alt="Google Logo"
      />
      Sign in with Google
    </SignIn>
  );
}
