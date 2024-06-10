import React from 'react'

function SplitBill({handleMinus, handlePlus, persons}) {
  return (
    <div>
      <div className="SplitBill">
        <div className="totalPeople">
          <h5 className='text-center font-semibold mt-[50px]'>No. Of People</h5>
          <div className="noPerson flex justify-center items-center gap-[20px] mt-3 mb-[50px]">
            <i className="fa-solid fa-plus bg-[#a2a0ff] rounded-[50%] p-[20px] text-[#fff]" onClick={handlePlus} />
            <p className='text-[30px]'>{persons}</p>
            <i className="fa-solid fa-minus bg-[#a2a0ff] rounded-[50%] p-[20px] text-[#fff]" onClick={handleMinus} />
          </div>

        </div>


      </div>
    </div>
  )
}

export default SplitBill