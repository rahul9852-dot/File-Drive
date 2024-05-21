"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, SignOutButton, useOrganization, useUser } from "@clerk/nextjs";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
export default function Home() {


  const {isLoaded, organization} = useOrganization();
  const user = useUser()
  const orgId = organization?.id ?? user.user?.id;
  const files = useQuery(api.files.getFiles, isLoaded ? {orgId} : 'skip');
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
      {files?.map((file)=> {
          return <div key={file._id}>{file?.name}</div>
        })}
      <Button onClick={()=>{
        if(!organization) return;
      createFile({
        name:'Hello World!',
        orgId:organization?.id
      })
      }}>Click Me</Button>
    </main>
  );
}
