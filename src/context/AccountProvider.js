import { createContext, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
export const AccountContext = createContext(null);
const AccountProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [chatText, setChatText] = useState("");
  const [activeAccount, setActiveAccount] = useState({});
  const [activeUsers, setActiveUsers] = useState([]);
  const socket = useRef();
  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);
  return (
    <AccountContext.Provider
      value={{
        account,
        setAccount,
        activeAccount,
        setActiveAccount,
        chatText,
        setChatText,
        socket,
        activeUsers,
        setActiveUsers,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
export default AccountProvider;
