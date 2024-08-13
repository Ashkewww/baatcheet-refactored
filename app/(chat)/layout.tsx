'use client'
import { createClient } from "@/utils/supabase/client";
import { redirect, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext<any>(null);

export default function Layout({children}: {children: React.ReactNode}) {
    const router = useRouter();
    const [userdata, setUserdata] = useState<any>(null);
    useEffect(() => {
        const supabase = createClient();
        const fetchUser = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) {
                router.push('/login')
            } else {
                setUserdata(user)
            }
        }
        fetchUser()
    }, [])
    return (
        <UserContext.Provider value={{userdata, setUserdata}} >
            <section>
                {children}
            </section>
        </UserContext.Provider>
    );
}

export { UserContext }