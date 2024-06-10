import React from 'react'

function TipInp({tip, setTip, calculateBill}) {
  return (
    <div>
      <div className="totalTip flex justify-between items-center mt-5 max-[778px]:flex-col">
        <label className='text-[20px] font-semibold'>Total Tip</label>
        <input className='bg-[#a2a0ff] w-[63%] py-[10px] px-[7px] rounded placeholder:text-[#fff] focus:outline-none text-[#fff]' type="number" placeholder='Enter Your Tip Percentage' value={tip} onChange={(e) => { setTip(e.target.value); calculateBill() }} />
      </div>
    </div>
  )
}

export default TipInp