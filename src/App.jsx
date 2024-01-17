import { useState } from "react";
import { Display } from "./components/display";
import "./App.css";
import { ButtonsContainer } from "./components/buttonsContainer";

function App() {
  let [calculateValue, setCalculateValue] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText == "C") {
      var fullString = document.getElementById("displayValueID").value;
      fullString = fullString.slice(0, -1);
      setCalculateValue(fullString);
    } else if (buttonText == "ESC") {
      setCalculateValue("");
    } else if (buttonText == "=") {
      const result = eval(calculateValue);
      setCalculateValue(result);
    } //For Square Root Take 3 digits only after the decimal.
    else if (buttonText == "sqrt") {
      const result = (
        Math.round(
          Math.sqrt(document.getElementById("displayValueID").value) * 100
        ) / 100
      ).toFixed(3);
      setCalculateValue(result);
    }
    //Performs x^2
    else if (buttonText == "x^2") {
      const result = Math.pow(
        document.getElementById("displayValueID").value,
        2
      );
      setCalculateValue(result);
    }
    //This operation is for the normal mathmatical task
    else {
      const newDisplayValue = calculateValue + buttonText;
      setCalculateValue(newDisplayValue);
    }
  };

  return (
    <>
      <div
        id="calculator"
        class="border-2 rounded-lg pl-24 pb-5 pr-2 border-black"
      >
        {/* Adding Input field */}
        <Display displayValue={calculateValue}></Display>

        {/* Adding buttons  */}
        <div id="buttons-containers">
          <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
        </div>
      </div>
    </>
  );
}

export default App;
