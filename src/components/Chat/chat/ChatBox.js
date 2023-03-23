import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getConversation } from "../../../service/api";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";

export default function ChatBox() {
  const { activeAccount, account } = useContext(AccountContext);
  const [conversation, setConversation] = useState({});
  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({
        senderId: account.sub,
        receiverId: activeAccount.sub,
      });

      setConversation(data);
    };
    getConversationDetails();
  }, [activeAccount.sub]);

  return (
    <div className="h-[78vh] lg:w-[600px]  md:w-[460px]  sm:w-[380px] w-[310px]  ">
      <ChatHeader />
      <Messages activeAccount={activeAccount} conversation={conversation} />
    </div>
  );
}
