import React, { useContext } from "react";
import { TrainContext } from "../context/Context";

function RestartButton() {
  const {
    restart, setRestart,
    setCurrentSpeed,
    setFinish,
    setCurrentAccuracy,
    setCurrentValidText,
    setCurrentSign,
    setCurrentBCCurrentSign,
    setCurrentSignBCVisible,
    setstartTime,
    setQuantityInvalidSigns,
    setSignsSum,
    setStart,
    setPushStart,
  } = useContext(TrainContext);

  function restartTrain() {
    console.log("again");
    setRestart(!restart);
    setFinish(false);
    setCurrentSpeed(0);
    setCurrentAccuracy(0);
    setCurrentValidText();
    setCurrentSign();
    setCurrentBCCurrentSign(true);
    setCurrentSignBCVisible(false);
    setstartTime();
    setQuantityInvalidSigns(0);
    setSignsSum(0);
    setStart(false);
    setFinish(false);
    setPushStart(false)
  }


   return (
    <button
       className="btn btn-primary col-12 fs-3 mt-2"
       onClick={() => restartTrain()}
    >
     Restart
    </button>
  )
}
export default RestartButton;