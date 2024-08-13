"use client"
import Link from "next/link"
import { brittany, arimo } from "@/app/fonts"
import { createClient } from "@/utils/supabase/client"

export function LandingPage(props: any) {
  const supabase = createClient();
  const onClickHandler = async () => {
    console.log('Clicked on Start Chatting')
    const { data : { session }} = await supabase.auth.getSession();
    if (session) {
      console.log("accesss token:", session.access_token)
      console.log("refresh token:", session.refresh_token)
      console.log("provider token:", session.provider_token)
      console.log("token type", session.token_type)
    }
  }
  return (
    <div className="flex flex-col min-h-dvh">
      <main className={`flex-1 flex items-center justify-center bg-gray-950 w-full ${arimo.className}`}>
        <div className="flex-col gap-5 max-w-md px-4 py-12 space-y-10 text-center w-full">
          <h1 className={`flex items-center justify-center text-5xl text-white ${brittany.className}`}>
            <p>BaatCheet</p>
          </h1>
          <h2 className="text-4xl font-bold text-white">Start Chatting</h2>
          <p className="text-lg text-primary-foreground/80">
            Connect with friends, family, and colleagues on BaatCheet.
          </p>
          <div
            onClick={onClickHandler}
            className="hover:cursor-pointer inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Start Chatting
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 BaatCheet. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}


