import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { getUser } from "../../../service/api";
import Conversation from "./Conversation";

export default function Communication(props) {
  const { account, socket, setActiveUsers, activeUsers } =
    useContext(AccountContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let res = await getUser();
      const filterData = res.filter((users) =>
        users.name.toLowerCase().includes(props.text.toLowerCase())
      );
      setUsers(filterData);
    };
    fetchData();
  }, [props.text, activeUsers]);
  useEffect(() => {
    socket.current.emit("addUsers", account);
    socket.current.on("getUsers", (users) => {
      setActiveUsers(users);
    });
  }, [account]);
  useEffect(() => {});

  return (
    <div className=" overflow-scroll">
      {users.map(
        (users) =>
          users.sub !== account.sub && (
            <Conversation users={users} key={users.sub} />
          )
      )}
    </div>
  );
}
