import { createContext, useState } from "react";


export const AdviceContext= createContext();
export const AdviceProvider=({children})=>{
const [advice,setAdvice] = useState({id:0,advice:'hola'})
    return(
        <AdviceContext.Provider
        value={{advice,setAdvice}}
        >
            {children}
        </AdviceContext.Provider>
    )
}