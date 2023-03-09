import React, { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import LoginDialogue from './Account/LoginDialogue'
import ChatDialogue from './Chat/ChatDialogue'

export default function Messenger() {
  const {account}=useContext(AccountContext)
  return (
    <div className='h-screen flex justify-center bg-black w-screen bg'>
      <div className='h-[30%] w-screen bg-[#00A884]'></div>
      {account?   <ChatDialogue/>: <LoginDialogue/>}
        
    </div>
  )
}
