import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import conf from '../images/conf.png'

function Confirmation()
{
    const navigate = useNavigate();

    const backHome = () => {
        navigate('/');
    };

    return(
        <div>
            <h2>Confirmation Page</h2>
            <br></br>
            <br></br>
            <img src={conf} height={450} width={500}></img>
            <br></br>
            <br></br>
            <h2>Payment Complete</h2>
            <br></br>
            <br></br>
            <p className="lead">Check your email and await further clarifying instructions and notification from the Owner Host</p>
            <br></br>
            <br></br>
            <Button type="button" variant="primary" onClick={() => { backHome() }}>Back to Home</Button>&nbsp;
        </div>
    )
}

export default Confirmation;