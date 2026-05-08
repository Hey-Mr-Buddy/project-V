"use client";

import { SignUp } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <SignUp
      path="/sign-up"
      routing="path"
      signInUrl="/sign-in"
    />
  );
}
