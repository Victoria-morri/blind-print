import React, { useContext, useEffect } from "react";
import { TrainContext } from "../context/Context";
import watchImg from "../images/watch.png";
import accurancyImg from "../images/accurancy.png";
function Trainer() {
  const {
    finish,
    setFinish,
    pushStart,
    setPushStart,
    start,
    setStart,
    signsSum,
    setSignsSum,
    quantityInvalidSigns,
    setQuantityInvalidSigns,
    startTime,
    setstartTime,
    currentSpeed,
    setCurrentSpeed,
    currentSignBCVisible,
    setCurrentSignBCVisible,
    currentBCCurrentSign,
    setCurrentBCCurrentSign,
    currentText,
    setCurrentText,
    currentValidText,
    setCurrentValidText,
    currentSign,
    setCurrentSign,
    currentAccuracy,
    setCurrentAccuracy,
  } = useContext(TrainContext);

  // useEffect(() => {
  //    if (currentSignBCVisible) {
  //       let timerFunc = setTimeout(() => {
  //          //speed
  //          const time2 = performance.now();
  //          const allTime = +(time2 - startTime) / 1000;
  //          const quantityValidSighs = Number(currentValidText.length);
  //          const speed = Math.round(quantityValidSighs / allTime * 60);
  //          setCurrentSpeed(speed);
  //          console.log('speed: ' + speed);
  //          console.log('startTime: ' + startTime);
  //          console.log('time2: ' + time2);
  //          console.log('allTime: ' + allTime);
  //          console.log('quantityValidSighs: ' + quantityValidSighs);
  //          console.log(currentSpeed);

  //          //accurancy
  //          console.log('signsSum: ' + signsSum)
  //          // quantityInvalidSigns
  //          const accyransy = (100 - (quantityInvalidSigns / (+signsSum / 100))).toFixed(2);
  //          setCurrentAccuracy(accyransy);
  //          console.log(quantityInvalidSigns);
  //          console.log(`accyransy: ${accyransy} %`)
  //       }, 300);

  //       //   return () => clearTimeout(timerFunc);
  //    }
  // }, [currentSignBCVisible
  //    ,
  //    currentValidText, currentSignBCVisible,
  //    currentSign,
  //    currentText,
  //    currentValidText,
  //    currentBCCurrentSign,
  //    quantityInvalidSigns,
  //    currentSpeed,
  //    signsSum,
  //    currentAccuracy
  // ]);

  useEffect(() => {
    let rotationInterval = setInterval(() => {
      if (pushStart) {
        console.log("happy");
        calcProfit();
        console.log(currentSpeed);
      } else {
        console.log("... stop");
        return clearInterval(rotationInterval);
      }
    }, 1000);

    // Clean up can be done like this
    return () => {
      clearInterval(rotationInterval);
    };
  }, [
    pushStart,
    currentValidText,
    // currentSign,
    // currentText,
    // currentValidText,
    // currentBCCurrentSign,
    quantityInvalidSigns,
    // currentSpeed,
    // signsSum,
    // currentAccuracy
  ]);

  function calcSpeed() {
    const time2 = performance.now();
    const allTime = +(time2 - startTime) / 1000;
    const quantityValidSighs = Number(currentValidText.length);
    const speed = Math.round((quantityValidSighs / allTime) * 60);
    setCurrentSpeed(speed);
    setTimeout(() => {
      console.log("currentSpeed: " + currentSpeed);
      console.log("speed: " + speed);
    }, 500);
    // console.log('currentSpeed: '+currentSpeed)
  }

  function calcAccurancy() {
     const accyransy = (100 - quantityInvalidSigns / (+signsSum / 100))
        .toFixed(2);
    setCurrentAccuracy(accyransy);
    console.log(currentAccuracy);
    console.log("accyransy: " + accyransy);
  }
  function calcProfit() {
    calcSpeed();
    calcAccurancy();
  }

  function controlTyping(evt) {
    if (!finish) {
      if (
        (currentSign === evt.shiftKey && evt.key) ||
        currentSign === evt.key
      ) {
        console.log(currentSign);
        setCurrentBCCurrentSign(true);
        setCurrentValidText(currentValidText.concat(currentSign));
        // console.log(currentValidText);

        if (currentText.length > 1) {
          setCurrentSign(currentText.slice(0, 1));
          setCurrentText(currentText.slice(1));
        } else if (currentText.length === 1) {
          setCurrentSign(currentText);

          setCurrentText(true);
          setFinish(true);
        }
        console.log(currentValidText);
      } else if (!evt.shiftKey) {
        setQuantityInvalidSigns(
          (quantityInvalidSigns) => quantityInvalidSigns + 1
        );
        setCurrentBCCurrentSign(false);
        console.log(currentBCCurrentSign);
      }
    } else {
      setCurrentValidText(currentValidText.concat(currentSign));
      setCurrentSign("You are finished!!!");
    }
  }

  function startTest(d) {
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
  }

  if (!currentText) {
    return <p className="text-white m-auto fs-3 fw-bolder">Waiting</p>;
  } else {
    return (
      <div className="m-3">
        <div className="d-flex flex-column flex-md-row flex-lg-row justify-content-between flex-wrap col-12">
          <p
            className="border border-primary bg-white border-3 rounded p-2 col-xs-12 col-md-7 col-xl-8 fs-3"
            tabIndex="1"
            onKeyDown={(evt) => controlTyping(evt)}
          >
            <span style={{ color: "#5bc538" }}>{currentValidText}</span>
            <span
              className="rounded text-white"
              style={{
                backgroundColor:
                  currentBCCurrentSign === true ? "#5bc538" : "#f36747",
                // color: 'white',
                display:
                  currentSignBCVisible === true ? "inline-block" : "none",
                minWidth: "10px",
                minHeight: "15px",
              }}
            >
              {currentSign}
            </span>
            {currentText}
          </p>
          <div className="d-flex flex-column col-xs-12 col-md-4 col-xl-3">
            <button
              className="btn btn-primary col-12 fs-3"
              onClick={(evt) => startTest(evt)}
            >
              {pushStart ? "Stop" : "Start"}
            </button>

            <div
              className="d-flex justify-content-between col-12 p-2 border border-primary rounded bg-white mt-2"
              style={{
                minWidth: "10px",
                minHeight: "15px",
              }}
            >
              {/* <div className="d-flex col-4" > */}
              <img
                src={watchImg}
                alt="watch"
                style={{ width: "43px", height: "40px" }}
              />
              <div className="d-flex justify-content-between align-items-center text-primary fs-3 fw-bolder">
                <span id="certificateSpeed" className="fs-2">
                  {currentSpeed}{" "}
                </span>{" "}
                зн./мин
              </div>
              {/* </div> */}
            </div>
            <div
              className=" d-flex justify-content-between col-12 p-2 border border-primary rounded bg-white mt-2"
              style={{
                minWidth: "10px",
                minHeight: "15px",
              }}
            >
              {/* <div className="d-flex col-4"> */}
              <img
                src={accurancyImg}
                alt="accurancy"
                style={{ width: "40px", height: "40px" }}
              />
              <div className="d-flex justify-content-between align-items-center text-primary fs-3 fw-bolder">
                <span id="certificateAccuracy" className="fs-2">
                  {currentAccuracy}{" "}
                </span>{'\u0020'}
                  %
              </div>
              {/* </div> */}
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }
}
export default Trainer;
