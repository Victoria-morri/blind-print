import React, { useContext, useEffect } from "react";
import { TrainContext } from "../context/Context";
import Accurancy from "./Accurancy";
import CurrentSpeed from "./CurrentSpeed";
import StartButton from "./StartButton";
import TrainText from "./TrainText";

function Trainer() {
  const {
    pushStart,
    signsSum,
    quantityInvalidSigns,
    startTime,
    setCurrentSpeed,
    currentText,
    currentValidText,
    setCurrentAccuracy,
  } = useContext(TrainContext);

  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (pushStart) {
        function calcSpeed() {
          const time2 = performance.now();
          const allTime = +(time2 - startTime) / 1000;
          const quantityValidSighs = Number(currentValidText.length);
          const speed = Math.round((quantityValidSighs / allTime) * 60);
          setCurrentSpeed(speed);
        }

        function calcAccurancy() {
          const accyransy = (100 - quantityInvalidSigns / (+signsSum / 100))
            .toFixed(2);
          setCurrentAccuracy(accyransy);
        }
        calcSpeed();
        calcAccurancy();
      } else {
        return clearInterval(rotationInterval);
      }
    }, 1000);

    return () => {
      clearInterval(rotationInterval);
    };
  }, [
    pushStart,
    currentValidText,
    quantityInvalidSigns
  ]);

  if (!currentText) {
    return <p className="text-white m-auto fs-3 fw-bolder">Waiting</p>;
  } else {
    return (
      <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-between flex-wrap col-11 m-3">
        <TrainText/>
			  <div className="d-flex flex-column col-xs-12 col-md-4 col-xl-3">
					<StartButton/>
					<CurrentSpeed/>
				  <Accurancy/>
				</div>
			</div>
    );
  }
}
export default Trainer;
