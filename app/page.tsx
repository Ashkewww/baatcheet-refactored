'use client'
import { LandingPage } from "@/components/landing-page";
import Header from "@/components/Header";
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

export default function Home() {
  const supabase = createClient();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }} = await supabase.auth.getUser();
      if (user) {
        setUser(user);
      }
    }
    fetchUser();
  })
  return (
    <main className="">
      <Header user={user} setUser={setUser} />
      <LandingPage user={user} setUser={setUser} />
    </main>
  );
}
