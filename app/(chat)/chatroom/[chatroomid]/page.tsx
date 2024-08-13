"use client"
import { useParams } from "next/navigation";
import { UserContext } from "../../layout";
import { useContext } from "react";

const ChatRoomPage = () => {
    const params = useParams();
    const chatroomid = params.chatroomid;
    const { userdata, setUserdata } = useContext(UserContext);
    return (
        <div>
            This is where the chat will be displayed {chatroomid} 
            <div>
                This chat is for {userdata?.id}
            </div>
        </div>
    );
}

export default ChatRoomPage;