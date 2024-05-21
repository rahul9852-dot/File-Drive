import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export function Header(){

  return (
    <div className="border-b">
      <div className="items-center container mx-auto flex justify-between">
        <div className="flex gap-2">
          File Drive
        </div>
        <OrganizationSwitcher/>
        <UserButton/>
      </div>
    </div>
  )
}
