import { ReactDOM,useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

import HomePage from "./components/HomePage";
import SignUp from "./components/SignUp";
import LoginPage from "./components/LoginPage";
import AddCourse from "./components/AddCourse";
import AllCourses from "./components/AllCourses";
import AllStudents from "./components/AllStudents";
import ShowCourse from "./components/ShowCourse";
import EditCourse from "./components/EditCourse";
import EditStudent from "./components/EditStudent";
import AccountPage from "./components/AccountPage";
import EditAccount from "./components/EditAccount";
import Conditions from "./components/Conditions";
import Booking from "./components/Booking";
import Confirmation from "./components/Confirmation";
import Payment from "./components/Payment";

function App() 
{
  return (
      <Router>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Log In</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Routes>
         <Route path="/" element={<HomePage/>}></Route>
         <Route path="home" element={<HomePage/>}></Route>
         <Route path="login" element={<LoginPage/>}></Route>
         <Route path="signup" element={<SignUp/>}></Route>
         <Route path="add" element={<AddCourse/>}></Route>
         <Route path="listall" element={<AllCourses/>}></Route>
         <Route path="users" element={<AllStudents/>}></Route>
         <Route path="account/:id" element= {<AccountPage/>}/>
         <Route path="editcourse/:id" element= {< EditCourse />}/>
         <Route path="showcourse/:id" element= {< ShowCourse />}/>
         <Route path="editstudent/:id" element= {< EditStudent />}/>
         <Route path="editaccount/:id" element= {< EditAccount />}/>
         <Route path="conditions" element= {< Conditions />}/>
         <Route path="booking/:id" element= {< Booking />}/>
         <Route path="confirmation" element= {< Confirmation />}/>
         <Route path="payment" element= {< Payment />}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
