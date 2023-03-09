import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { setConversation } from "../../../service/api";

export default function Conversation(props) {
  const{setActiveAccount,account}=useContext(AccountContext)
  async function active(){
     setActiveAccount(props.users)
     await setConversation({senderId:account.sub,
    receiverId:props.users.sub })

     
  }
  return (
    <div onClick={active} className="p-1 ml-[10px] mb-[10px] w-[94%] flex bg-gray-100 text-sm text-gray-800">
      <img
        className="h-[40px] w-[40px] rounded-full mr-2"
        src={props.users.picture}
        alt={"g"}
      />
      {props.users.name}
    </div>
  );
}
