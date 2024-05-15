import React,{useId} from 'react'

function InputBox({
    label,//input le liya 
    amount,
    onAmountChange,//method hai 
    onCurrencyChange,//method hai
    currencyOptions=[],
    selectCurrency="usd",
    amountDisable=false,
    currencyDisable=false,


    className="",//user se input k liye aur line 10 mei user k input diya hua inject kara diye
}) {

    const amountInputId= useId()
    return (
        <div className={`bg-white p-3 rounded-lg text-sm
        flex ${className}`}>
            <div className='w-1/2'>
                <label htmlFor={amountInputId}
                className='text-black/40 mb-2 
                inline-block'> 
                    {label}  
                    </label> 
                <input 
                  id={amountInputId}
                    className='outline-none w-full bg-transparent py-1.5'
                    type='number'
                    placeholder='Amount'
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=> onAmountChange && 
                        onAmountChange(Number(e.target.value))}
                />
            </div>

            <div className='w-1/2 flex flex-wrap justify-end text-right'>
                <p className='text-black/40  mb-2 w-full'>
                    Currency Type</p> 
                <select className='rounded-lg px-1 py-1 bg-gray-100 
                cursor-pointer outline-none' 
                        value={selectCurrency}
                        onChange={(e)=>onCurrencyChange && 
                            onCurrencyChange(e.target.value)}
                            //value of currency changes on change therfore we used onCurrencyChange
                            disabled={currencyDisable}

                >
                    
                    {currencyOptions.map((currency)=>(//Remember the key while using loops in react
                        <option key={currency} 
                            value={currency}>
                             {currency}
                         </option>
                    ))}
                    
                </select>
            </div>
        </div>

    );
}

export default InputBox;

//The <select> element creates a dropdown menu.
// Inside the <select> element, multiple <option> elements define the available options in the dropdown.
// Each <option> element has a value attribute, which represents the value of that option when selected. This is the value that gets sent to the server when the form is submitted.
// The text content of the <option> elements represents the visible label of each option in the dropdown.



// UseID:
// The useId hook generates a random ID using Math.random() and toString(36). This ensures that the ID is unique.
// The hook is used within the MyComponent to generate unique IDs for the label and input elements.
// By generating unique IDs dynamically, you avoid conflicts when using labels and inputs together, ensuring accessibility and proper functionality.





