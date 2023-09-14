import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Service = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-4">
            <h2 className="text-center mb-4">Financial Services</h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <button className="btn btn-primary btn-lg btn-block">Banking</button>
              </div>
              <div className="col-md-6 mb-4">
                <button className="btn btn-primary btn-lg btn-block">Investments</button>
              </div>
              <div className="col-md-6 mb-4">
                <button className="btn btn-primary btn-lg btn-block">Loans</button>
              </div>
              <div className="col-md-6 mb-4">
                <button className="btn btn-primary btn-lg btn-block">Fintech</button>
              </div>
              <div className="col-md-6 mb-4">
                <button className="btn btn-primary btn-lg btn-block">Insurance</button>
              </div>
              <div className="col-md-6 mb-4">
                <button className="btn btn-primary btn-lg btn-block">Exchanges</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
