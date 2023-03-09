import React, { useContext } from "react";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from "../../../context/AccountProvider";

export default function ChatHeader() {
  const {activeAccount,activeUsers}=useContext(AccountContext)
  
  const url=activeAccount.picture
  
  return (
    <div className="h-[58px] flex   items-center w-[100%] bg-gray-200">
      <img src={url} alt={"profile"} className="h-[40px] w-[40px] ml-[10px]  rounded-full"/>
      <div className="h-[58px] flex flex-col justify-center  ml-[10px]">
        <div className="h-[20px]  w-[350px] mb-[3px]">{activeAccount.name}</div>
        <div className="h-[20px]  text-sm text-gray-500">{activeUsers.find(user=> user.sub === activeAccount.sub)?"online":"offline"}</div>
      </div>
      <div className="  flex items-center ml-[420px]">
        <SearchIcon/>&nbsp;&nbsp;&nbsp;&nbsp;
        <MoreVertIcon/>
      </div>
    </div>
  );
}
