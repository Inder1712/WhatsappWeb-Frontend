import React, { useContext } from "react";

import { AccountContext } from "../../context/AccountProvider";

export default function Profile(props) {
  const { account } = useContext(AccountContext);

  return (
    <div className="bg-[#F1F2F5] h-[83%]">
      <div className="flex justify-center items-center w-[397px] h-[200px]">
        <img
          className="rounded-full w-[150px] h-[150px] "
          src={account.picture}
          alt="random"
        />
      </div>
      <div className="bg-white w-[390px] h-[80px]">
        <div className="text-sm text-[#00A884] p-2">Your Name</div>
        <div className="mt-[5px] text-lg p-2">{account.name}</div>
      </div>
      <div className="w-[390px] h-[80px] text-sm flex items-center text-gray-600 p-2">
        This is not your username or pin. This name will be visible to your
        whatsapp contacts
      </div>
      <div className="bg-white w-[390px] h-[80px]">
        <div className="text-sm text-[#00A884] p-2">About</div>
        <div className="mt-[5px] text-lg p-2">Gym</div>
      </div>
    </div>
  );
}
