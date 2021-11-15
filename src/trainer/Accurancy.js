import React, { useContext } from "react";
import { TrainContext } from "../context/Context";
import accurancyImg from "../images/accurancy.png";

function Accurancy() {
  const {
    currentAccuracy
  } = useContext(TrainContext);

  return (
    <div
      className=" d-flex justify-content-between col-12 p-2 border border-primary rounded bg-white mt-2"
      style={{
        minWidth: "10px",
        minHeight: "15px",
      }}
    >
      <img
        src={accurancyImg}
        alt="accurancy"
        style={{ width: "40px", height: "40px" }}
      />
      <div className="d-flex justify-content-between align-items-center text-primary fs-3 fw-bolder">
        <span id="certificateAccuracy" className="fs-2">
          {currentAccuracy}
        </span>
      &nbsp; %
      </div>
    </div>
  )
}
export default Accurancy;