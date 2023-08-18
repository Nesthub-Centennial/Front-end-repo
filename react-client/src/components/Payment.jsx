import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import payment from '../images/payment.png'

function Payment()
{
    const navigate = useNavigate();
    const onChange = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value});
        }

        const confirmationScreen = () => {
            navigate('/confirmation');
        };

    return(
        <div>
            <h2>Payment Page</h2>
            <br></br>
            <img src={payment} height={165} width={700}></img>
            <br></br>
            <br></br>
            <Form>
                <Form.Group size="lg">
                    <Form.Label>Card Number:</Form.Label>
                    <br></br>
                    <Form.Control type="number" name="card" id="card" placeholder="Type your card" onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>Cardholder name:</Form.Label>
                    <br></br>
                    <Form.Control type="text" name="name" id="name" placeholder="Mr/Mrs.sample" onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>Expiry Date:</Form.Label>
                    <br></br>
                    <Form.Control type="text" name="expiry" id="expiry" placeholder="MM/YY" onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>Security Code:</Form.Label>
                    <br></br>
                    <Form.Control type="password" name="cvv" id="lastname" placeholder="cvv" onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>ZIP/Postal Code</Form.Label>
                    <br></br>
                    <Form.Control type="text" name="postal" id="postal" placeholder="postal code" onChange={onChange} required></Form.Control>
                    <br></br>
                    <br></br>
                    <Button variant="info" type="submit" onClick={() => { confirmationScreen() }}>Pay</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Payment;