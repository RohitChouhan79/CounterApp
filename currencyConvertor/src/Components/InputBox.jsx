import React, { useId } from 'react'

// import React from 'react'

// const InputBox ({
//     className=''
// }){
//     return (
//         <div className={`bg-white p-3 rounded-lg text-sm flex` ></div>  
//     )
  
// }

// export default InputBox


function InputBox({
    label,
    Amount,
    onAmountChange,
    onCurrencyChange,
    currencyoptions=[],
    selectCuurncy='usd',
    AmountDisable=false,
    currencyDisable=false,
    className = "",
}) {
   
    const amountId=useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountId}  className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={AmountDisable}
                    value={Amount} 
                    onChange={(e)=>onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    disabled={currencyDisable}
                    value={selectCuurncy}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    
                >
                    
                        {currencyoptions.map((currency)=>(
                            <option key={currency} value={value}>
                               {currency}
                            </option>
                        ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
