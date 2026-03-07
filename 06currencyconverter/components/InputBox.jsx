import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = "", // gives user a chance to customise the input box with their own classes
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label} </label>
        <input
          type="number"
          className="outline-none w-full bg-transparent py-1.5"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(event) => {
            onAmountChange && onAmountChange(Number(event.target.value));
          }} // this method will help us change the amount
          // the event.target.value is a STRING
          // check if onAmountChange exists? is this an expression? i guess? its not a condition because no if else statement i guess like so the code is checking if onAmountChange and exists and if there is something when onAmountChange() executes, otherwise it will not run the callback..?
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(event) => {
            onCurrencyChange && onCurrencyChange(event.target.value);
          }}
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency, index, array) => (
            <option key={currency} value={currency}>
              {currency}
            </option> // the map needs to return this option tag so that the render can receive this option tag and we add a key so react can track it in the DOM? dont write it like {<option></option>} unless we use the return keyword to return it!
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
