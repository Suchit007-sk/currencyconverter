import { useState } from 'react';
import { InputBox } from './components';
import useCurrencyInfo from './Hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <>
    <h1>India is my Country All Indians Arevmy Broter and Sisters</h1>
    <h2>Hi Suchit Welcome To React  and Everything and All</h2>
    <h3>Hi Suchit Welcome To React  and Everything and All</h3>
    <h4>Hi Suchit Welcome To React  and Everything and All</h4>
    <h5>Hi Suchit Welcome To React  and Everything and All</h5>
    <h6> Suchit </h6>
    <h7> Suchit </h7>
    <h8> Suchit </h8>
    <h9> Suchit </h9>
   
    <div 
      className="min-vh-100 d-flex justify-content-center align-items-center"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="border rounded-3 p-4 bg-white bg-opacity-75 backdrop-blur">
              <form onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}>
                <div className="mb-3">
                  <InputBox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setFrom(currency)}
                    selectCurrency={from}
                    onAmountChange={(amount) => setAmount(amount)}
                  />
                </div>

                <div className="position-relative my-3">
                  <button
                    type="button"
                    className="position-absolute top-50 start-50 translate-middle btn btn-primary btn-sm rounded-pill px-3 py-1 border border-2 border-white"
                    onClick={swap}
                  >
                    Swap
                  </button>
                </div>

                <div className="mb-4">
                  <InputBox
                    label="To"
                    amount={convertedAmount}
                    currencyOptions={options}
                    onCurrencyChange={(currency) => setTo(currency)}
                    selectCurrency={to}
                    amountDisable
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-100 btn btn-primary btn-lg rounded-2 py-3"
                >
                  Convert {from.toUpperCase()} to {to.toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
