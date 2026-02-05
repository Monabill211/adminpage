import React from 'react'

export default function Time() {
  return (
    <div>
      <div className='boxs flex gap-8 justify-around' style={{ marginTop: "35px" }}>
        <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
          <h2 className='text-center text-gray-600'> اجمالي المرضي</h2>
          <div className='flex justify-between'>
            <h2 className='text-2xl'>2.111</h2>
            <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}>ic</span>
          </div>
          <p className='text-green-500' style={{ fontSize: "14px" }}>12% هذا الشهر</p>
        </div>

        <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
          <h2 className='text-center text-gray-600'> موعيد اليوم</h2>
          <div className='flex justify-between'>
            <h2 className='text-2xl'>20</h2>
            <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}>ic</span>
          </div>
          <p className='text-blue-500' style={{ fontSize: "14px", color: "#0891B2" }}>5 مواعيد لم يتم تاكيدها</p>
        </div>

        <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
          <h2 className='text-center text-gray-600'> اجمالي المرضي</h2>
          <div className='flex justify-between'>
            <h2 className='text-2xl'>2.111</h2>
            <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}>ic</span>
          </div>
          <p className='text-green-500' style={{ fontSize: "14px" }}>12% هذا الشهر</p>
        </div>

        <div className='box-1 bg-white shadow-2xs rounded-2xl w-52' style={{ padding: "25px" }}>
          <h2 className='text-center text-gray-600'> اجمالي المرضي</h2>
          <div className='flex justify-between'>
            <h2 className='text-2xl'>2.111</h2>
            <span className='text-blue-800 bg-blue-400 w-10 h-10 text-center' style={{ padding: "8px", borderRadius: '10px' }}>ic</span>
          </div>
          <p className='text-green-500' style={{ fontSize: "14px" }}>12% هذا الشهر</p>
        </div>
      </div>

   
       <div className='shadow-2xs bg-white rounded-2xl mx-auto' style={{ padding: "25px", margin: "30px",}}>
        <div className='flex justify-between'>
                    <h1 className='text-right font-bold mb-4'>تاكيد الموعيد</h1>

        </div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
    <h2>اسم المريض</h2>
    <h2>ملحوظة</h2>
    <h2>رقم الهاتف</h2>
    <h2>تاريخ التسجيل </h2>
    <h2>الحالة</h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
    <h2 className='cursor-pointer text-green-400 font-medium'> محمد نبيل </h2>
  <h4 className='w-20'>انا تعبان جدا و مستعجل</h4>
    <h2>01110094460</h2>
    <h2>22/2/2025</h2>
    <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>
    <select>
        <option>تاكيد</option>
        <option>الغاء</option>
        <option>تاجيل</option>
        </select>    
    </span></h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
       <h2 className='cursor-pointer text-green-400 font-medium'> محمد صلاح</h2>
    <h4 className='w-20'>عاوز اقابل الدكتور بسرعة</h4>
    <h5>01021219588 </h5>
    <h1>25/2/2026</h1>
    <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>
    <select>
        <option>تاكيد</option>
        <option>الغاء</option>
        <option>تاجيل</option>
        </select>    
    </span></h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
     <h2 className='cursor-pointer text-green-400 font-medium'> محمد صلاح</h2>
      <h4 className='w-20'>عاوز اقابل الدكتور بسرعة</h4>
    <h5>01021219588 </h5>
    <h1>25/2/2026</h1>
    <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>
    <select>
        <option>تاكيد</option>
        <option>الغاء</option>
        <option>تاجيل</option>
        </select>    
    </span></h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
       <h2 className='cursor-pointer text-green-400 font-medium'>محمد صلاح</h2>
     <h4 className='w-20'>عاوز اقابل الدكتور بسرعة</h4>
    <h5>01021219588 </h5>
    <h1>25/2/2026</h1>
     <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>
    <select>
        <option>تاكيد</option>
        <option>الغاء</option>
        <option>تاجيل</option>
        </select>    
    </span></h2>
</div>
<div className='flex justify-between' style={{borderBottom:"1px solid #c1b9b9", padding:" 10px 40px "}}>
        <h2 className='cursor-pointer text-green-400 font-medium'> محمد صلاح</h2>
     <h4 className='w-20'>عاوز اقابل الدكتور بسرعة</h4>
    <h5>01021219588 </h5>
    <h1>25/2/2026</h1>
   <h2>  <span className='text-green-600 bg-green-100 px-3 py-1 rounded-full text-sm'>
    <select>
        <option>تاكيد</option>
        <option>الغاء</option>
        <option>تاجيل</option>
        </select>    
    </span></h2>
</div>
       
      </div>
    </div>
  )
}
