import React from 'react'
import EmptyChat from './chat/EmptyChat'
import Menu from './Menu/Menu'
export default function ChatDialogue() {
  return (
    <div className='absolute h-[650px] w-[1300px] flex bg-white mt-[60px]'>
    <Menu/>
    <EmptyChat/>
    </div>
    )
}
