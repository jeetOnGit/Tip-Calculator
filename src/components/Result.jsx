import React from 'react'

function Result({total, splitCalcutate}) {
  return (
    <div>
      <div className="output">
        <div className="total flex justify-between items-center mt-5 max-[778px]:flex-col">
          <h5 className='text-[20px] font-semibold'>Total Amount</h5>
          <p>{total}</p>
        </div>

        <div className="eachTotal flex justify-between items-center mt-5 max-[778px]:flex-col">
          <h5 className='text-[20px] font-semibold'>Amount For Each</h5>
          <p>{splitCalcutate}</p>
        </div>
      </div>
    </div>
  )
}

export default Result