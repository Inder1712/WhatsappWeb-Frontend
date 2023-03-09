import React, { useContext, useState } from "react";
import ChatIcon from "@mui/icons-material/Chat";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { AccountContext } from "../../../context/AccountProvider";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

export default function Header() {
  const[drop,setDrop]=useState(false)
  const { account } = useContext(AccountContext);
  const [drawer,setDrawer]=useState(false)
  function toggle(){
    setDrop((x)=>!x)
  }
  function toggleIn(){
    setDrawer(true)
    
  }
  function toggleOut(){
    setDrawer(false)
    
  }
 
  return (
    <div className="w-[100%] h-[9%] bg-gray-200 flex p-1">
      <img onClick={toggleIn}
        className="rounded-full w-[45px] h-[45px] "
        src={account.picture}
        alt="random"
      />
      {drawer &&<InfoDrawer toggleOut={toggleOut}/>}
      <div className="ml-[290px] mr-[10px] mt-3">
        <ChatIcon />
      </div>
      <div onClick={toggle} className="mt-3">
        <MoreVertIcon />
      </div>
      {drop&&<HeaderMenu/>}
    </div>
  );
}
