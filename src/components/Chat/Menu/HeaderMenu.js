import React from "react";

export default function HeaderMenu() {
  return (
    <div className="w-[192px] h-[177px] border-2 shadow-sm border-gray-200  shadow-gray-600 ml-[190px] mt-[45px] bg-white absolute">
      <button className="h-[35px] hover:bg-gray-100 flex items-end w-[190px] bg-white border-r-2 border-gray-200 text-gray-600 pl-3">
        New Group
      </button>
      <button className="h-[35px] hover:bg-gray-100 flex items-end w-[190px] bg-white border-r-2 border-gray-200 text-gray-600 pl-3">
        Archived
      </button>
      <button className="h-[35px] hover:bg-gray-100 flex items-end w-[190px] bg-white border-r-2 border-gray-200 text-gray-600 pl-3">
        Starred Messages
      </button>
      <button className="h-[35px] hover:bg-gray-100 flex items-end w-[190px] border-r-2 border-gray-200 bg-white text-gray-600 pl-3">
        Settings
      </button>
      <button className="h-[35px] hover:bg-gray-100 flex items-end w-[190px] border-b-2  bg-white text-gray-600 pl-3 border-r-2 border-gray-200">
        Log Out
      </button>
    </div>
  );
}
