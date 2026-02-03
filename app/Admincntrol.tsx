import React from 'react'

export default function Admincnrol() {
  return (
    <div dir='rtl' className='h-screen w-64 bg-white border-2 border-gray-200 flex flex-col items-center shadow-2xl'>
      <div >
        <img src="/img/download.png" />
      </div>
      <span className='border-1 border-gray-400 w-5/6 m-1'></span>
      <div className='flex flex-col items-center gap-10 w-5/6' style={{marginTop:"15px"}}>
        <div className='bg-blue-500 rounded-2xl w-5/6 text-center text-white cursor-pointer' style={{padding:"10px"}}>لوحة التحكم</div>
        <div className='cursor-pointer'>المرضي</div>
        <div className='cursor-pointer'>الموعيد</div>
        <div className='cursor-pointer'>تحليل التقرير </div>
        <div className='cursor-pointer'>الادوية</div>
      </div>
    </div>
  )
}
