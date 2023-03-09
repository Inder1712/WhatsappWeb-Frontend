import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { FormatDate } from "../../../utils/FormatDate";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Download } from "../../../utils/Download";

export default function Msg({ messages }) {
 
  const { account } = useContext(AccountContext);
  return (
    <div
      className={`m-2 ${
        account.sub === messages.senderId ? "items-end " : "items-start"
      } flex flex-col`}
    >
      {messages.type === "text" && (
        <div className={`${account.sub===messages.senderId?"bg-[#D6F2BF]":"bg-white"} max-w-[70%] min-w-[10%] mb-[8px] inline-block break-words p-2 rounded-md text-sm`}>
          {messages.text}
          <div className="text-[10px]  text-gray-500 ">
            {FormatDate(messages.createdAt)}
          </div>
        </div>
      )}
      {messages.type === "file" && (
        <div className={`${account.sub===messages.senderId?"bg-[#D6F2BF]":"bg-white"} max-w-[70%] min-w-[10%] mb-[8px] inline-block break-words p-2 rounded-md text-sm`}>
          <img
            src={
              messages.text.includes(".pdf")
                ? "https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g"
                : messages.text
            }
            alt="img"
          />
          <div className="mt-2  flex   ">
            <div onClick={(e)=>Download(e,messages.text)} className="h-[28px] rounded-full w-[28px] text-gray-500 border-2 border-gray-500">
            

            <ArrowDownwardIcon />
            </div>
            <div className="ml-2 mt-1">

          {messages.text.split("/").pop()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
