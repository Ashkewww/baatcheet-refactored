"use client"
import React, { useState, useEffect } from 'react'
import { LoginForm } from './components/LoginForm'
import { useSearchParams, useRouter } from 'next/navigation'

const LoginPage = () => {
  const searchParams = useSearchParams()
  const [message, setMessage] = useState(searchParams.get('message'));
  const router = useRouter();
  useEffect(() => {
    const setRefreshFlag = async () => {
      localStorage.setItem("refresh", "true");
    }

    window.addEventListener("beforeunload", setRefreshFlag)

    if (localStorage.getItem("refresh")) {
      localStorage.removeItem("refresh")
      if (searchParams.toString()) {
        const url = window.location.pathname
        router.replace(url)
      }
    }

    return () => {
      window.removeEventListener("beforeunload", setRefreshFlag)
    }

  }, [])
  return (
    <>
      <div className="flex h-svh items-center">
        <LoginForm errorMessage={message} setErrorMessage={setMessage} />
      </div>
    </>
  )
}

export default LoginPage