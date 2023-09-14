import React from 'react';
import './Home.css';
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Popup from './Components/Popup';

const HomePage = () => {
let navigate = useNavigate();
    const register = ()=>{
        navigate('/register');
    }

    const [showDialog, setShowDialog] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const handleOpenDialog = () => {
        setShowDialog(true);
    };
    const handleCloseDialog = () => {
        setShowDialog(false);
    };
    const handleSaveAccountNumber = (number) => {
        setRedirect(true);
    };

    return (
        <div className="Home">
            <header className="Home-header">
                <h1 className='header'>NatWest Banking App</h1>
                <div className="card-container">
                    <div className="card1" >
                        <img src="https://media.istockphoto.com/id/1463013729/photo/online-registration-form-for-modish-form-filling.webp?b=1&s=170667a&w=0&k=20&c=iUOC7YLenExVDT9pfUtJyyIS-dlJvOPyJq1USG4lv5I=" alt="Register" />
                        <div className="container1">
                            <button className="button" onClick={()=>register()}>Register</button>
                            <p className='p'>To add a User, Please click on the register button and add revelant deatails.</p>
                        </div>
                    </div>
                    <div className="card1" >
                        <img src="https://img.freepik.com/free-vector/finance-services-financial-transaction-e-commerce-e-payment_335657-3134.jpg" alt="Services" />
                        <div className="container1">
                        <button className="button" onClick={handleOpenDialog}>Service</button>
                        <Popup
                            show={showDialog}
                            handleClose={handleCloseDialog}
                            handleSave={handleSaveAccountNumber}
                        />
                        {redirect && navigate('/service')}
                        <p className='p'>After successful registration, click on the Service button to access the provided services.</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
