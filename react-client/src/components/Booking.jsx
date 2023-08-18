import React from "react";
import { ReactDOM,useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from 'react-router-dom';

function Booking(props)
{
    let { id } = useParams();
    const [student, setStudent] = useState({studNumber: '', password: ''});
    const apiUrl = "https://localhost:7049/api/StudentAPI/EditAccount" + id;
    const navigate = useNavigate();
    /*const saveBooking = (e) => {
        setShowLoading(true);
        e.preventDefault();
        const data = { studNumber: student.studNumber, password: student.password, 
            firstName: student.firstName,lastName: student.lastName, address: student.address,city: student.city,phone: student.phone, program: student.program};
          //use promises
          axios.post(apiUrl, data)
          .then((result) => {
            setShowLoading(false);
            navigate('/home')
          }).catch((error) => setShowLoading(false));
      };*/
      const paymentScreen = () => {
        navigate('/payment');
    }

      const onChange = (e) => {
        e.persist();
        setStudent({...student, [e.target.name]: e.target.value});
        }

    return(
        <div>
            <h2>Booking page {id}</h2>
            <br></br>
            <Form>
                <Form.Group size="lg">
                    <Form.Label>Unit id:</Form.Label>
                    <br></br>
                    <Form.Control type="text" name="studNumber" id="studNumber" placeholder="Type your id" value={id} onChange={onChange} readOnly></Form.Control>
                    <br></br>
                    <Form.Label>Number of Nights:</Form.Label>
                    <br></br>
                    <Form.Control type="number" name="firstname" id="firstname" placeholder="nights" value={student.firstname} onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>Check In:</Form.Label>
                    <br></br>
                    <Form.Control type="date" name="lastname" id="lastname" placeholder="arrive date" value={student.lastname} onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>Check Out:</Form.Label>
                    <br></br>
                    <Form.Control type="date" name="address" id="address" placeholder="depart date" value={student.address} onChange={onChange} required></Form.Control>
                    <br></br>
                    <Form.Label>Number of guests:</Form.Label>
                    <br></br>
                    <Form.Control type="text" name="city" id="city" placeholder="guests" value={student.city} onChange={onChange} required></Form.Control>
                    <br></br>
                    <br></br>
                    <Button variant="info" type="submit" onClick={() => { paymentScreen() }}>Reserve</Button>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Booking;