import React from "react";
import { ReactDOM,useState,useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate, useParams } from 'react-router-dom';
import house1 from '../images/house1.jpg'
import house2 from '../images/house2.jpg'
import house3 from '../images/house3.jpg'
import house4 from '../images/house4.jpg'
import unit1 from '../images/unit1.jpg'
import unit2 from '../images/unit2.jpg'
import unit3 from '../images/unit3.jpg'
import unit4 from '../images/unit4.jpg'
import unit5 from '../images/unit5.jpg'

function AccountPage()
{
    let { id } = useParams();
    //const [data, setData] = useState({});
    console.log(id);
    const [screen, setScreen] = useState('auth');
    const navigate = useNavigate();
    const [showLoading, setShowLoading] = useState(true);
    const [data, setData] = useState([]);
    const arr = [
    {hid: 'Lakefront Luxury Cottage with Private Dock',unitAdress: 'Bowmanville, Ontario, Canada', ratings: 4, price: 383, house: house1, host:'Richard D.T.'},
    {hid: 'Beach House Niagara - Featured On Narcity & BlogTO',unitAdress: 'Burlington, Ontario, Canada', ratings: 5,price: 550,house: house2, host:'Williams C.V.'},
    {hid: 'Luxurious Waterfront Vacation Villa Kolenchery',unitAdress: 'Kawartha Lakes, Ontario, Canada', ratings: 3.5,price: 719,house: house3, host:'Bradley M.K.'},
    {hid: 'Lakeside Luxury: Couples & Business Retreat',unitAdress: 'Wainfleet, Ontario, Canada', ratings: 4.7,price: 1296,house: house4, host:'Simon S.A.'},
    {hid: 'Elegantly Designed Condo with Cityscape View',unitAdress: 'Toronto, Ontario, Canada', ratings: 4.7,price: 299,house: unit1, host:'Lin C.C.'},
    {hid: 'Luxury Condo next to CN Tower, Scotia Arena',unitAdress: 'Toronto, Ontario, Canada', ratings: 5.1,price: 379,house: unit2, host:'Ahmad R.J.'},
    {hid: '2 Bedroom Condo in the heart of Toronto',unitAdress: 'Toronto, Ontario, Canada', ratings: 'new',price: 399,house: unit3, host:'Helen K.D.'},
    {hid: 'Beautiful Downtown Escape with Onsite Parking Spot',unitAdress: 'Toronto, Ontario, Canada', ratings: 5.1,price: 430,house: unit4, host:'Celina V.B.'},
    {hid: 'Wonderful condominium with gorgeous city view!',unitAdress: 'Toronto, Ontario, Canada', ratings: 5.1,price: 199,house: unit5, host:'Ungbeen W.O.'}
];
    const [student, setStudent] = useState({studNumber: '', password: ''});
    const apiUrl = "https://localhost:7049/api/StudentAPI/EditAccount" + id;

  /*useEffect(() => {
    setShowLoading(false);
    const fetchData = async () => {
      const result = await axios(apiUrl);
      console.log('results from courses:',result.data);
      setData(result.data);
      setShowLoading(false);
    };

    fetchData();
  }, []);*/
  /*useEffect(() => {
    const fetchData = async () => {
      axios.get(apiUrl)
        .then(result => {
          console.log('result.data:',result.data)
          //check if the user has logged in
          //if(result.data.screen !== 'auth')
          //{
            console.log('data in if:', result.data )
            setData(result.data);
            setShowLoading(false);
          //}
        }).catch((error) => {
          console.log('error in fetchData:', error)
          setListError(true)
        });
      };  
    fetchData();
  }, []);*/

    const onChange = (e) => {
    e.persist();
    setStudent({...student, [e.target.name]: e.target.value});
    }


    const editAccount = (id) => {
        navigate('/editaccount/'+ id);
    };

    const Conditions = () => {
        navigate('/conditions');
    };

    const showBooking = (id) => {
        navigate('/booking/'+ id);
    }

    return(
        <div>
            <h1>Account Page</h1>
            <br></br>
            <h2>Hi user : {id}</h2>
            <br></br>
            <Button type="button" variant="primary" onClick={() => { editAccount(id) }}>Edit Profile</Button>&nbsp;
            <Button type="button" variant="primary" onClick={() => { Conditions(id) }}>Booking Conditions</Button>&nbsp;
            <br></br>
            <br></br>
            <h2>| Relevant to you |</h2>
            <br></br>
            <ListGroup>
            {arr.map((item, idx) => (
            <ListGroup.Item key={idx} action onClick={() => { showBooking(item.hid) }}>{<img src={item.house} height={180} width={230}></img>}{" "+item.hid+ ","}{" Address:"+item.unitAdress+","} {" Ratings: "+item.ratings+","} {" Night:"+item.price+"$ CAD"} {"Host:"+item.host}{<Button variant="info" type="submit">Message Host</Button>}</ListGroup.Item>
          ))}
        </ListGroup>
        </div>
    )
}

export default AccountPage;