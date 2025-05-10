import React, { useEffect, useState } from 'react'
import InputBox from '../components/InputBox'
import UseCurrencyinfo from '../hooks/usecurrencyinfo';

const Container = () => {
    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("inr");
    const [to, setTo] = useState("usd");
    const [convertamount, setConvertedamount] = useState(0);

    const currencyInfo = UseCurrencyinfo(from);
    const options = Object.keys(currencyInfo || {}); // Safeguard if currencyInfo is null

    const swap = () => {
        setFrom(to);
        setTo(from);
        setConvertedamount(amount);
        setAmount(convertamount);
    };

    const convert = () => {
        if (currencyInfo && currencyInfo[to]) {
            setConvertedamount(amount * currencyInfo[to]);
        } else {
            alert("Conversion rate not available yet. Please try again.");
        }
    };

    return (
        <div>
            <div>
                <form
                    className="relative"
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    <InputBox
                        label="From"
                        amount={amount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => {
                            setFrom(currency)
                        }}
                        selectCurrency={from}
                        onAmountChange={(amount) => setAmount(amount)}
                    />
                    <button
                        onClick={swap}
                        type="button"
                        className="absolute top-21 right-105 !text-2xl !bg-blue-700 !border-2 !border-white"
                    >
                        Swap
                    </button>
                    <InputBox
                        label="To"
                        amount={convertamount}
                        currencyOptions={options}
                        onCurrencyChange={(currency) => setTo(currency)}
                        selectCurrency={to}
                        amountDisable={true}
                    />
                    <button
                        type="submit"
                        className="!mt-4 !mr-4 !ml-4 !bg-blue-700 !text-2xl !w-5/7 !text-white-700 !font-bold !border-2 !border-white"
                    >
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Container;
