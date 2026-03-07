import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import useCurrencyInfo from "../hooks/useCurrencyInfo.js";
import { InputBox } from "../components/index.js";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("sgd");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from); // be clear what data you are getting.
  const options = Object.keys(currencyInfo); // grabs all the keys from currencyInfo object (aka a dict)

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    console.log("converted amount changed! to: ", amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2)); // the [to] value is the currency type we want to convert like sgd.. check the json structure
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/5466807/pexels-photo-5466807.jpeg)`,
      }} // what is this url thing? i think there is a similar one in python?
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(event) => {
              event.preventDefault(); // prevent the default functionality when form is submitted
              convert(); // do we need a useCallback() for this convert function or don't need since child components not involved here?
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // automatically updates the dropdown text i guess?? a bit confused?? where's the currency variable??
                onAmountChange={(amount) => setAmount(amount)} // what is OnAmountChange used for? like change that field when the amount changes or something? its just a reference to run the callback to change the amount field and variable?
                selectedCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button" // we NEED TO INDICATE THE TYPE IS BUTTON, OTHERWISE DEFAULT TYPE IS SUBMIT, AND 2 THINGS HAPPEN - OUR swap function will run AND the onSubmit event fires and then the convert function executes! so our convertedAmount will stay the same and will not change because react uses the LATEST state of the variable. the entire function will run first then react renders.
                onClick={swap}
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                Swap
              </button>
            </div>
            <div className="w-full mb-1">
              <InputBox
                label="to"
                amount={convertedAmount}
                amountDisabled // read only field, you can also write amountDisabled={true}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)} // automatically updates the dropdown text i guess?? a bit confused?? where's the currency variable?? or is it from the component?
                selectedCurrency={to}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
