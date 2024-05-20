"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignOutButton } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
export default function Home() {

  // const session = useSession();

  const createFile = useMutation(api.files.createFile)

  return (
    <main className="flex items-center justify-center flex-col min-h-screen p-24">
      <SignedIn>
        <SignOutButton>
          <Button>Sign Out</Button>
        </SignOutButton>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
            <Button>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <Button onClick={()=>createFile({
        name:'Hello World!'
      })}>Click Me</Button>
    </main>
  );
}
