import React, { useContext } from "react";
import { TrainContext } from "../context/Context";

function TrainText() {
  const {
    finish,
    setFinish,
    pushStart,
    setPushStart,
    start,
    setStart,
    setQuantityInvalidSigns,
    currentSignBCVisible,
    currentBCCurrentSign,
    setCurrentBCCurrentSign,
    currentText,
    setCurrentText,
    currentValidText,
    setCurrentValidText,
    currentSign,
    setCurrentSign,
  } = useContext(TrainContext);

  function controlTyping(evt) {
		if (!finish) {
			if (start) {
				if (!/[A-z?,.! ]/.test(evt.key)) {
					alert('Пожалуйста, смени раскладку клавиатуры на Английский.');
				} else {
						if ((currentSign === evt.shiftKey && evt.key) || currentSign === evt.key) {
							setCurrentBCCurrentSign(true);
							setCurrentValidText(currentValidText.concat(currentSign));

							if (currentText.length > 1) {
								setCurrentSign(currentText.slice(0, 1));
								setCurrentText(currentText.slice(1));
							} else if (currentText.length === 1) {
									setCurrentSign(currentText);
									setCurrentText(true);
									setFinish(true);
							}
							} else if (!evt.altKey && !evt.shiftKey) {
									setQuantityInvalidSigns(
									(quantityInvalidSigns) => quantityInvalidSigns + 1
									);
									setCurrentBCCurrentSign(false);
							}
				}
			}
    } else {
      setCurrentValidText(currentValidText.concat(currentSign));
			setCurrentSign("You are finished!!!");
			setFinish(false);
			setStart(false);
			setPushStart(!pushStart);
    }
  }

  return (
    <p
      id="text"
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
  )
}
export default TrainText;