import React from 'react'

function BillInp({bill, setBill, calculateBill}) {
  return (
    <div>
      <div className="totalBill flex justify-between items-center mt-5 max-[778px]:flex-col">
        <label className='text-[20px] font-semibold'>Total Bill</label>
        <input className='bg-[#a2a0ff] w-[63%] py-[10px] px-[7px] rounded placeholder:text-[#fff] focus:outline-none text-[#fff]' type="number" placeholder='Enter Your Bill Amount' value={bill} onChange={(e) => { setBill(e.target.value); calculateBill() }} />
      </div>
    </div>
  )
}

export default BillInp