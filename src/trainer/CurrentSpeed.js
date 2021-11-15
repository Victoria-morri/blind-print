import React, { useContext } from "react";
import { TrainContext } from "../context/Context";
import watchImg from "../images/watch.png";

function CurrentSpeed() {
  const {
    currentSpeed
  } = useContext(TrainContext);

  return (
    <div
      className="d-flex justify-content-between col-12 p-2 border border-primary rounded bg-white mt-2"
      style={{
        minWidth: "10px",
        minHeight: "15px",
      }}
    >
      <img
        src={watchImg}
        alt="watch"
        style={{ width: "43px", height: "40px" }}
      />
      <div className="d-flex justify-content-between align-items-center text-primary fs-3 fw-bolder">
        <span id="certificateSpeed" className="fs-2">
          {currentSpeed}{" "}
        </span>
        &nbsp;зн./мин
      </div>
    </div>
  )
}
export default CurrentSpeed;