import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [bill, setBill] = useState()
  const [tip, setTip] = useState()
  const [total, setTotal] = useState()
  const [persons, setPersons] = useState(1)
  const [splitCalcutate, setSplitCalculate] = useState()

  const handlePlus = () => {
    setPersons(persons + 1)
    calculateBill()
  }

  const handleMinus = () => {
    if (persons === 1) {
      setPersons(1)

    } else {
      setPersons(persons - 1)
    }
    calculateBill()

  }

  const calculateBill = () => {
    const billAmt = parseFloat(bill)
    const tipAmt = parseFloat(tip)
    // const perPerson =parseFloat(persons)
    const result = (billAmt * tipAmt) / 100;
    let totalRes = Math.round( billAmt + result)
    if (isNaN(totalRes)) totalRes = 0;
    const personAmt = Math.round( totalRes / persons);
    setSplitCalculate(personAmt)
    setTotal(totalRes)
  }


  useEffect(() => {
    calculateBill();
  }, )


  return (
    <div className='bg-[#615EFC] h-[100vh] text-align pt-6'>

      <div className='card bg-[#fff] w-[500px] py-6 px-5 mx-auto rounded max-[520px]:w-[400px]'>
        <h1 className='font-bold text-center text-[30px]'>Calculate Your Tip</h1>

        <div className="totalBill flex justify-between items-center mt-5 max-[778px]:flex-col">
          <label className='text-[20px] font-semibold'>Total Bill</label>
          <input className='bg-[#a2a0ff] w-[63%] py-[10px] px-[7px] rounded placeholder:text-[#fff] focus:outline-none text-[#fff]' type="number" placeholder='Enter Your Bill Amount' value={bill} onChange={(e) => { setBill(e.target.value); calculateBill() }} />
        </div>

        <div className="totalTip flex justify-between items-center mt-5 max-[778px]:flex-col">
          <label className='text-[20px] font-semibold'>Total Tip</label>
          <input className='bg-[#a2a0ff] w-[63%] py-[10px] px-[7px] rounded placeholder:text-[#fff] focus:outline-none text-[#fff]' type="number" placeholder='Enter Your Tip Percentage' value={tip} onChange={(e) => { setTip(e.target.value); calculateBill() }} />
        </div>

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
    </div>
  );
}

export default App;
