import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [initialPrice, setInitialPrice] = useState();
  var [currentPrice, setCurrentPrice] = useState();
  var [stocks, setStocks] = useState();
  var [profitOrLoss, setProfitOrLoss] = useState();
  var [percentage, setPercentage] = useState();
  const profitOrLossText = profitOrLoss >= 0 ? "profit" : "loss";

  function profitLossHandler() {
    var stockPriceInitial = initialPrice * stocks;
    var stockPriceCurrent = currentPrice * stocks;
    var profitOrLoss = stockPriceCurrent - stockPriceInitial;
    var percentage = (profitOrLoss / stockPriceInitial) * 100;
    setProfitOrLoss(profitOrLoss);
    setPercentage(percentage.toFixed(2));
  }

  return (
    <div className="App">
      <h1>Profit loss calculater</h1>
      <div>
        Initial Price
        <div>
          <input
            type="number"
            onChange={() => setInitialPrice(event.target.value)}
          />
        </div>
      </div>
      <div>
        Quantity of Stocks
        <div>
          <input type="number" onChange={() => setStocks(event.target.value)} />
        </div>
      </div>
      <div>
        Current Price
        <div>
          <input
            type="number"
            onChange={() => setCurrentPrice(event.target.value)}
          />
        </div>
      </div>
      <div>
        <button onClick={profitLossHandler}>Caluclate Profit/Loss</button>
        <div>
          <p>
            You are making {profitOrLossText} of {profitOrLoss}₹ (
            {profitOrLossText}%: {percentage}%)
          </p>
        </div>
      </div>
    </div>
  );
}
