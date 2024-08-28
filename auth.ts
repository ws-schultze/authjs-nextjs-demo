import NextAuth from "next-auth";
import "next-auth/jwt";
import Google from "next-auth/providers/google";
import { NextAuthConfig } from "next-auth";

const config: NextAuthConfig = {
  providers: [Google],
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
