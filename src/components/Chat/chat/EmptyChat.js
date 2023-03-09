import React, { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import Background from "./background.png"
import ChatBox from './ChatBox'
export default function EmptyChat() {
  const{activeAccount}=useContext(AccountContext)
  return (
    <div className='w-[900px] bg-white h-[100%]'>
      { Object.keys(activeAccount).length?
      <ChatBox/>: <img className='h-[100%]' src={Background} alt={"background"}/>}
    </div>
  )
}
