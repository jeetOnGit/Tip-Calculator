import { useState, useEffect } from 'react';
import './App.css';
import Result from './components/Result';
import BillInp from './components/BillInp';
import TipInp from './components/TipInp';
import SplitBill from './components/SplitBill';

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

        

        <BillInp bill={bill} setBill={setBill} calculateBill={calculateBill}/>

       

        <TipInp tip={tip} setTip={setTip} calculateBill={calculateBill}/>

        

        <SplitBill handleMinus ={handleMinus} handlePlus={handlePlus} persons={persons}/>

        

        <Result total={total} splitCalcutate={splitCalcutate}/>
      </div>
    </div>
  );
}

export default App;
