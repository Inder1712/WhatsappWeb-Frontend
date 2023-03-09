import React from 'react'
import Profile from"./Profile"
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
export default function InfoDrawer(props) {
  return (
    <div className='absolute h-[99%] w-[397px] bg-white'>
        <div className="bg-[#017F6A] text-white text-lg flex h-[110px] w-[397px] pt-[70px] pl-[10px]">
        <button onClick={props.toggleOut}>
          <ArrowBackIcon />
        </button>
        &nbsp;&nbsp;Profile
      </div>
      <Profile/>
    </div>
  )
}

