"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { brittany } from "@/app/fonts";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import LoginButton from "./LoginLogoutButton";
import { useRouter } from "next/navigation";
import { signout } from "@/lib/auth-actions";

const Header = (props: any) => {
  const router = useRouter();
  const user = props.user
  const onClickHandlerProfile = (event: any) => {
	router.push("/profile")
  }
  const onClickHandlerSettings = (event: any) => {
	router.push("/settings")
  }
  const onClickHandlerSignOut = async (event: any) => {
	await signout();
  }
  return (
    <header className="flex items-center justify-between px-4 lg:px-6 h-20 bg-gray-950">
      <Link href="/" className="flex items-center gap-2" prefetch={true}>
        <span className={`text-2xl text-white ${brittany.className}`}>BaatCheet</span>
      </Link>
      {user ? <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="default" size="icon" className="rounded-full">
		  <Avatar className="h-8 w-8 border-gray-800 ">
            <AvatarImage src={user.user_metadata.avatar_url}/>
            <AvatarFallback about={user.user_metadata.full_name} />
          </Avatar>
            <span className="sr-only">Toggle user menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="bg-gray-950 text-white border-gray-700">
          <div className="flex flex-col items-center gap-4 p-2 w-auto min-w-40">
            <Avatar className="h-12 w-12">
              <AvatarImage src={user.user_metadata.avatar_url} />
              <AvatarFallback about={user.user_metadata.full_name} />
            </Avatar>
            <div className="grid gap-0.5 leading-none">
              <div className="font-semibold">{user.user_metadata.full_name}</div>
              {/* <div className="text-sm text-gray-500">
                {user.user_metadata.email}
              </div> */}
            </div>
          </div>
          <DropdownMenuSeparator className="bg-gray-800"/>
          <DropdownMenuItem onClick={onClickHandlerProfile} className="hover:cursor-pointer" >
			<div className="flex items-center justify-center gap-2 hover:cursor-pointer w-full">
				<span className="w-full text-center">Profile</span>
			</div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={onClickHandlerSettings} className="hover:cursor-pointer">
		  <div className="flex items-center justify-center gap-2 hover:cursor-pointer w-full">
				<span className="w-full text-center">Settings</span>
			</div>
          </DropdownMenuItem>
          <DropdownMenuSeparator className="bg-gray-800"/>
          <DropdownMenuItem onClick={onClickHandlerSignOut} className="hover:cursor-pointer bg-destructive">
		  <div className="flex items-center justify-center gap-2 hover:cursor-pointer w-full">
				<span className="w-full text-center">Sign Out</span>
			</div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu> :
	  <div className="flex gap-3">
		<LoginButton type={"signup"} />
		<LoginButton type={"login"} />
	  </div>
	  }
    </header>
  );
};

function WebcamIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="10" r="8" />
      <circle cx="12" cy="10" r="3" />
      <path d="M7 22h10" />
      <path d="M12 22v-4" />
    </svg>
  );
}
export default Header;
