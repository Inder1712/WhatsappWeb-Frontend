import React, { useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import Background from "./background.png";
import ChatBox from "./ChatBox";
export default function EmptyChat() {
  const { activeAccount } = useContext(AccountContext);
  return (
    <div className="lg:w-[770px]  md:w-[670px]  sm:w-[570px] bg-white h-[100%]">
      {Object.keys(activeAccount).length ? (
        <ChatBox />
      ) : (
        <div className="h-[100%] w-[100%] flex justify-center items-center bg-[#F0F2F5]">
          <img className="" src={Background} alt={"background"} />
        </div>
      )}
    </div>
  );
}
