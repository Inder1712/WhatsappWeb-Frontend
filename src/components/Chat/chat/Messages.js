import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getMessage, newMessage } from "../../../service/api";
import ChatFooter from "./ChatFooter";
import Msg from "./Msg";

export default function Messages(props) {
  const { account, activeAccount, chatText, setChatText, socket } =
    useContext(AccountContext);
  const [file, setFile] = useState();
  const [messages, setMessages] = useState([]);
  const [img, setImg] = useState();
  const [incommingMessage, setIncommingMessage] = useState(null);
  const [messageFlag, setMessageFlag] = useState(false);
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setIncommingMessage({
        ...data,
        createdAt: Date.now(),
      });
    });
    console.log("low");
  }, []);

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessage(props.conversation._id);
      setMessages(data);
    };
    props.conversation._id && getMessageDetails();
  }, [activeAccount._id, props.conversation._id, messageFlag]);
  useEffect(() => {
    incommingMessage &&
      props.conversation?.members?.includes(incommingMessage.senderId) &&
      setMessages((prev) => [...prev, incommingMessage]);
    console.log("j");
  }, [incommingMessage, props.conversation]);

  async function sendText(event) {
    const code = event.KeyCode || event.which;
    if (code === 13) {
      let message;
      if (!file) {
        message = {
          senderId: account.sub,
          receiverId: props.activeAccount.sub,
          conversationId: props.conversation._id,
          type: "text",
          text: chatText,
        };
      } else {
        message = {
          senderId: account.sub,
          receiverId: props.activeAccount.sub,
          conversationId: props.conversation._id,
          type: "file",
          text: img,
        };
      }
      socket.current.emit("sendMessage", message);
      await newMessage(message);
      setChatText("");
      setFile("");
      setImg("");
      setMessageFlag((x) => !x);
    }
  }
  const url =
    "https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png";
  return (
    <div>
      <div className="lg:h-[63vh] xl:h-[63vh] 2xl:h-[72vh]  md:h-[63vh] sm:h-[57vh] h-[51vh] relative w-[100%]  overflow-y-scroll overflow-hidden">
        <img
          src={url}
          alt={"chat background"}
          className="w-[100%] relative z-0"
        />
        <div className="absolute top-0 w-[100%] h-[100%]">
          {messages &&
            messages.map((messages) => {
              return <Msg messages={messages} />;
            })}
        </div>
      </div>
      <ChatFooter
        sendText={sendText}
        value={chatText}
        file={file}
        setFile={setFile}
        setImg={setImg}
      />
    </div>
  );
}
