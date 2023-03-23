import React from "react";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./Menu/Menu";
export default function ChatDialogue() {
  return (
    <div className="absolute lg:h-[650px] md:h-[650px] sm:h-[600px] lg:w-[1000px] md:w-[750px] sm:w-[620px] w-[550px] h-[550px] flex bg-white mt-[60px]">
      <Menu />
      <EmptyChat />
    </div>
  );
}
