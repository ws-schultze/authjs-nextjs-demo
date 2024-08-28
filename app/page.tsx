import { auth } from "@/auth";
import { GoogleSignInBtn } from "@/components/ui/google-sign-in-btn";
import { SignOutBtn } from "@/components/ui/sign-out-btn";
import Image from "next/image";

export default async function Home() {
  const session = await auth();
  return (
    <main className="flex flex-col gap-5 justify-center items-center p-5">
      {session ? (
        <div className="flex flex-col gap-3">
          <p className="rounded-md bg-gray-700 p-3 flex justify-center">
            Session data
          </p>
          <p className="rounded-md bg-gray-900 py-6 px-4 whitespace-pre-wrap break-all">
            {JSON.stringify(session, null, 2)}
          </p>

          <div className="rounded-md bg-gray-700 p-5 flex gap-5 items-center w-fit ">
            <p>{session.user?.name}</p>
            {session.user?.image ? (
              <Image
                src={session.user?.image}
                alt="user image"
                width={64}
                height={64}
              />
            ) : null}
          </div>
          <SignOutBtn />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <p className="rounded-md bg-gray-700 p-3 flex justify-center">
            Sign in to see what the session data looks like
          </p>
          <GoogleSignInBtn />
        </div>
      )}
    </main>
  );
}
