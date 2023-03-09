import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
export default function Search(props) {
  function onChange(event){
    props.setText(event.target.value)

  }
  return (
    <div className='h-[8%]  w-[100%] p-[2%]'>
        <div className='h-[100%] flex justify-center items-center w-[98%] bg-gray-200'>
        <SearchIcon/>
        <input onChange={onChange} type="text" className='bg-gray-200 flex pl-2 w-[85%] ml-[5%]' placeholder='Search or start new chat'></input>

        </div>
        </div>
  )
}
