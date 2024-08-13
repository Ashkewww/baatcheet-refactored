"use client"

import React, { useState } from "react";
import { SignUpForm } from "./components/SignUpForm";
import { useSearchParams } from "next/navigation";

const SignUpPage = () => {
  const searchParams = useSearchParams()
  const [errorMessage, setErrorMessage] = useState(searchParams.get('message'));
  return (
    <div className="flex h-svh items-center">
      <SignUpForm errorMessage={errorMessage} setErrorMessage={setErrorMessage} />
    </div>
  );
};

export default SignUpPage;
