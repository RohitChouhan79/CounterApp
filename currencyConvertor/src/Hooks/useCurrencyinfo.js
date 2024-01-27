// import axios from "axios";
import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    const [Data, setData] = useState({})

    // const callData = async ()=>{
    //     try {
    //         const {data} = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`);
    //         // setData(data)
    //         console.log(data)
    //         return data;
    //     } catch (error) {
    //         console.log('errr', error)
    //     }
    // }
    useEffect(()=>{

        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
        
        // setData(callData())
       
    },[currency])
    // console.log(Data);
    return Data;
}

export default useCurrencyInfo;
