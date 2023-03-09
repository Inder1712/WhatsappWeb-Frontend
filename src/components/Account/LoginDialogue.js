import React, { useContext } from "react";
import logo from "./logo.png";
import qe from "./qe.png";
import { GoogleLogin } from '@react-oauth/google';
import jwtDecode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { addUser } from "../../service/api";

export default function LoginDialogue() {
  const {setAccount}=useContext(AccountContext)
 async function  onSuccess (res){
    setAccount(jwtDecode(res.credential));
    await addUser(jwtDecode(res.credential))
  }
  function onError(){
    console.log("Login failed");
  }
  return (
    <div className="absolute  h-[650px] w-[65%] bg-white top-[30px] ">
      <div className="w-[100%] flex  bg-[#00A884] h-[70px]">
        <div>
          <img className="h-[40px] w-[40px]" src={logo} alt="logo" />
        </div>
        <div className="text-white font-semibold text-lg mt-[7px]">
          &nbsp;Whatsapp Web
        </div>
      </div>
      <div className="flex">
        <div className="h-[500px] w-[600px] bg-white">
          <div className="text-3xl mt-[20px] text-gray-600 font-thin ml-[20px]">Use Whatsapp on your computer </div>
          <div className=" mt-[20px] text-gray-600 text-xl ml-[30px]">
            1. Open Whatsapp on your phone <br/> <br/>
            2. Tap Menu or Settings and select on Linked Devices<br/><br/>
            3. Tap on Link a Device<br/><br/>
            4. Point your phone to this screen to capture the code<br/><br/>

          </div>
        </div>
        <div className="h-[100px] w-[400px] mt-[30px] ml-[60px] "><img className="h-[300px] w-[300px]" src={qe} alt="QR-Code"/></div>
       <div className="mt-[150px] ml-[685px] absolute">

        <GoogleLogin 
         onSuccess={onSuccess}
         onError={onError}
         
/>
         </div>
      </div>
    </div>
  );
}
