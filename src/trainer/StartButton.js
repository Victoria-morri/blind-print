import React, { useContext } from "react";
import { TrainContext } from "../context/Context";

function StartButton() {
  const {
    pushStart, setPushStart,
    currentText, setCurrentText,
    setCurrentSign,
    startTime, setstartTime,
    setSignsSum,
    setCurrentSignBCVisible,
    start, setStart
  } = useContext(TrainContext);

  function startTest() {
    if (!start) {
      setStart(true);
      setCurrentSignBCVisible(true);
      setSignsSum(Number(currentText.length));
      setstartTime(performance.now());
      console.log(startTime);
      setCurrentSign(currentText.slice(0, 1));
       setCurrentText(currentText.slice(1));


    }
    setPushStart(!pushStart);
    const text = document.getElementById('text');
    text.focus();
  }


  return (
    <button
    className="btn btn-primary col-12 fs-3"
    onClick={() => startTest()}
    >
      {pushStart ? "Stop" : "Start"}
    </button>
  )
}
export default StartButton;