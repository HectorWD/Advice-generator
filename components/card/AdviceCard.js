import React ,{useContext,useEffect} from 'react'
import { AdviceContext } from '../../context/adviceContext'
import DiceButton from '../buttons/DiceButton'

const AdviceCard = ({id,firstAdvice}) => {
  const {advice,setAdvice}= useContext(AdviceContext);
  useEffect(() => {
    setAdvice({id:id,advice:firstAdvice})
  }, [])
  return (
    <div className="flex flex-col items-center justify-center mx-12 bg-gray-600 min-w-fit rounded-xl">
        <h2 className="px-8 m-2 text-green-500">Advice # {advice.id}</h2>
        <span className="px-8 m-2 text-lg font-semibold text-center text-white">"{advice.advice}"</span>
        <div className="px-8 m-2 ">
        <img
        src="img/pattern-divider-mobile.svg"
        className="self-center "/>
        </div>
        <DiceButton/>
      </div>
  )
}
  export default AdviceCard