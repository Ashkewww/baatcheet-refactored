"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { signout } from "@/lib/auth-actions";

const LoginButton = (props: any) => {
  const router = useRouter();
  if (props.type && props.type === "logout") {
    return (
      <Button
        className="bg-gray-200 text-black hover:text-gray-200"
        onClick={() => {
          signout();
        }}
      >
        Log out
      </Button>
    );
  }
  if (props.type && props.type === "signup") {
    return (
      <Button
        className="bg-gray-200 text-black hover:text-gray-200"
        onClick={() => {
          router.push("/signup");
        }}
      >
        Sign Up
      </Button>
    );
  }
  return (
    <Button
    className="bg-gray-200 text-black hover:text-gray-200"
      onClick={() => {
        router.push("/login");
      }}
    >
      Login
    </Button>
  );
};

export default LoginButton;
