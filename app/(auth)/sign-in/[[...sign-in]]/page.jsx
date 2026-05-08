"use client";

import { SignIn } from "@clerk/nextjs";

export const dynamic = "force-dynamic";

export default function Page() {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
}
