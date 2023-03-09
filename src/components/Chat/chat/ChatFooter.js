import React, { useContext, useEffect, useState } from "react";

import AttachmentIcon from "@mui/icons-material/Attachment";
import MoodIcon from "@mui/icons-material/Mood";
import MicIcon from "@mui/icons-material/Mic";
import { AccountContext } from "../../../context/AccountProvider";
import { uploadFile } from "../../../service/api";

export default function ChatFooter(props) {
  const{setChatText}=useContext(AccountContext)
  function changeChatText(event){
    setChatText(event.target.value)


  }
  function fileChange(e){
   props.setFile(e.target.files[0])
   setChatText(e.target.files[0].name)
  }

useEffect(()=>{
  if(props.file){
  const setFileData=async()=>{
    const data = new FormData()
    data.append("name",props.file.name)
    data.append("file",props.file)
    let res=await uploadFile(data)
    props.setImg(res.data)
}
setFileData()
  }
},[props.file])

  return (
    <div className="h-[55px] flex items-center bg-gray-200">
      <div className="h-[100%] flex justify-center w-[100%]  items-center text-gray-500 bg-gray-200">
        <div className="mr-[10px]">
        <MoodIcon />

        </div>
        <label htmlFor="file">

        <AttachmentIcon />
        </label>
        <input
        type="file"
        id="file"
        className="hidden"
        onChange={fileChange}/>
        <input

        onChange={changeChatText}
        onKeyPress={(event)=>{props.sendText(event)}}
          type="text"
          className="bg-white ml-[10px] w-[750px] rounded-lg "
          placeholder="Search or start new chat"
          value={props.value}
        ></input>
        <div className="ml-[10px]">

        <MicIcon />
        </div>
      </div>
    </div>
  );
}
