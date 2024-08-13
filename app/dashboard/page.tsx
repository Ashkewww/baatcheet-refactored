'use client'

import { useContext } from "react";
import { UserContext } from "./layout"

const DashboardPage = () => {
    const { userdata, setUserdata } = useContext(UserContext);
    return (
        <div>
            This is the Dashboard {userdata?.id}
        </div>
    );
}

export default DashboardPage;
