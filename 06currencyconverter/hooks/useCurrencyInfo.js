// designing our own hook, this hook is just a function.
// just name our hooks to use<something> ??
import { useEffect, useState } from "react";

// we don't want to clutter app.jsx with this logic so we separate our hooks in another file.
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  // what is mounting of hooks???
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`,
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => setData(res[currency])); // instead of using .then, can we use async await instead??
  }, [currency]); // any change in currency, re-fire this function

  console.log(data);

  return data;
}

export default useCurrencyInfo;
