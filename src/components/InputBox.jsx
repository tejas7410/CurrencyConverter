import React, { useId } from 'react'

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = {},
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    classname = "",
}) => {
    const amountInputId = useId();
    return (
        <div>
            <div className={`ml-4 mr-4 mt-8 pb-2 w-contain border-2 border-black bg-white h-25 rounded-4xl text-blue-800 font-bold flex flex-wrap justify-between ${classname}`}>
                <fieldset className='flex-row justify-between  border-2 border-gray-400 rounded-4xl mx-4 my-3 .no-spinner'>
                    <legend htmlFor={amountInputId}>{label}</legend>
                    <input htmlFor={amountInputId} type='number' className=' w-full p-1 rounded-2xl focus:outline-none '
                        name="Amount1"
                        disabled={amountDisable}
                        value={amount}
                        placeholder='Amount'
                        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    />
                </fieldset>
                <fieldset className='flex-row justify-between border-2 border-gray-400  rounded-2xl mx-4 my-3 px-4  '>
                    <legend>Currency Type</legend>
                    <select
                        name="currency"
                        id="currency"
                        className="w-fit p-1 mx-4 rounded-2xl focus:outline-none"
                        disabled={currencyDisable}
                        value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    >
                        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                                {currency}
                            </option>
                        ))}
                    </select>
                </fieldset>
            </div>
        </div >
    )
}

export default InputBox
