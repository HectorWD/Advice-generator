import React,{useContext} from 'react'
import { AdviceContext } from '../../context/adviceContext';

const DiceButton = () => {
  const {setAdvice}= useContext(AdviceContext);
  const nextAdvice= async()=>{
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setAdvice({id:data.slip.id,advice:data.slip.advice})
    }
    catch (error) {
      console.log(error)
    }
  }
  return (
    <div 
    className="p-4 mt-1 -m-6 bg-green-400 rounded-full bottom-1/3 hover:cursor-pointer hover:bg-green-600"
    onClick={nextAdvice}
    >
    <img
    src="img/icon-dice.svg"
    className=""/>
      </div>
  )
}


export default DiceButton