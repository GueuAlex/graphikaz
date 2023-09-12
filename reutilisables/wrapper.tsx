import React from 'react'


export default function Wrapper({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <div className='w-full flex-col items-center  flex justify-center '>
        <div className='wrapper-content max-w-[97rem] py-[2rem] px-[2rem] w-full'>
            {children}
        </div>
    </div>
  )
}
