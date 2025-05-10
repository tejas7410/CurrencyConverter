import { useEffect, useState } from "react";

function UseCurrencyinfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((response) => response.json())
            .then((res) => {
                setdata(res[currency])
                console.log(res[currency])
            })
    }, [currency])
    return data;
}

export default UseCurrencyinfo;