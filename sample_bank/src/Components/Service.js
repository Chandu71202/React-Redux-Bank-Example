import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = () => {
  let navigate = useNavigate();

  const banking = () => {
    navigate("/banking");
  };
  const investments = () => {
    navigate("/investments");
  };
  const loans = () => {
    navigate("/loans");
  };
  const fintech = () => {
    navigate("/fintech");
  };
  const insurance = () => {
    navigate("/insurance");
  };
  const exchanges = () => {
    navigate("/exchanges");
  };
  return (
    <div className="service-container ">
      <div className="service-box">
        <h1 className="h1-service-box">Services</h1>
        <div className="button-container">
          <div className="button-group">
            <button className="button1" onClick={() => exchanges()}>
              Exchanges{" "}
            </button>
            <button className="button1" onClick={() => fintech()}>
              Fintech{" "}
            </button>
            <button className="button1" onClick={() => banking()}>
              {" "}
              Banking
            </button>
          </div>
          <div className="button-group">
            <button className="button1" onClick={() => investments()}>
              {" "}
              Investments{" "}
            </button>
            <button className="button1" onClick={() => loans()}>
              Loans
            </button>
            <button className="button1" onClick={() => insurance()}>
              Insurance{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
