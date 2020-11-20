import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as MockMobile } from '../../Assets/cart.svg';
import Card from './Card';
import Map from '../SelectLocationOnMap/Map';
import GetUserLocation from '../SelectLocationOnMap/GetUserLocation';
import IconButton from '@material-ui/core/IconButton';
import Modal from '@material-ui/core/Modal';
import axios from 'axios';

import {ReactComponent as CloseButton} from '../../Assets/close-black-18dp.svg';
import Navbar from '../navbar';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles(() => ({
    root: {
        margin: 10,
    },
    svg: {
        height: 600,
        width: 600,
        margin:20,
        position: 'fixed'
    },
    box: {
        width: 600,
        margin: 10,
        borderRadius: 10,
        boxShadow: '0 0 10px #e17e51',
        padding: 10
    },
    left: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height:'100vh'
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: 30
    },
    closeButton:{
        position: 'absolute',
        '&.MuiIconButton-root':{
          left: '10px',
          top: '10px',
          width: '45px',
          height:'45px'
        }
      },
    submitButton:{
        width: '300px',
        height: '45px',
        fontFamily: 'weasthood',
        fontSize: '22px',
        letterSpacing: '2px',
        borderRadius: '30px',
        border: '0',
        outline: '0',
        backgroundColor: '#3F50B5',
        color: '#fff',
        boxShadow: '0px 4px 15px 0px rgba(0,0,0,0.25)',
    },
    flexRow:{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '20px'
    },
    driver:{
        fontWeight: '500',
        fontSize: '18px',
        margin: 0
    },
    modal:{
        width: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        backgroundColor: '#fff',
        border: '0',
        outline: '0',
        top      : '10%',
        left     : '50%',
        right    : 'auto',
        bottom   : 'auto',
        marginRight: '-50%',
        transform: 'translateX(-50%)'  
    },
}));

const Cart = ({ items, setItems,mapStatus,businessDeails}) => {
    const history = useHistory();

    const [total, setTotal] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [driverName, setDriverName] = useState('--');
    const [driver, setDriver] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [location, setLocation]= useState({
        lat: 15.292158,
        lng: 73.969542
    });

    useEffect(() => {
        items.forEach((item) => {
            setTotal(prev => prev+item.price)
        })
    }, [items])

    useEffect(()=>{
        if(driver)
            setDriverName(driver.name)
    },[driver])

    useEffect(()=>{    
        if(mapStatus && businessDeails && driver){
            const options={
                origins: [{ //driverlocation, restauramt
                    lat: 0, 
                    lng: 0 
                },{lat: parseFloat(businessDeails.lat), long: parseFloat(businessDeails.long)}],
                destinations: [{lat: parseFloat(businessDeails.lat), long: parseFloat(businessDeails.long)},location], //.[restaurantlocation, user location]
                travelMode: 'DRIVING',
            }  
            var service = new window.google.maps.DistanceMatrixService();
            service.getDistanceMatrix(options, (response, status)=>{
                console.log(response)
                if(status==='OK'){
                    if(response.rows[0].elements[0].status==='OK' && response.rows[0].elements[0].status==='OK'){
                    const driverToRestaurant= response.rows[0].elements[0].duration.value;//driver to restaurant
                    const restaurantToUser= response.rows[0].elements[1].duration.value;//restaurant to user
                    setTotalTime(driverToRestaurant+restaurantToUser);
                    }
                }
            });
        }
    },[location,mapStatus,businessDeails,driver])

    const secondsToHms=()=> {
        if(totalTime===0)
            return('ETA: --')
        let d = Number(totalTime);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
    
        var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
        var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
        return 'ETA: ' + hDisplay + mDisplay ; 
    }

    const deleteItem = (name) => {
        const cart = items.filter(item => item.name !== name);
        setItems(cart)
    }

    const driverPageRedirect= ()=>{
        setModalOpen(true)
        axios.post('https://solcarry-backend.herokuapp.com/driver/closest',{
            lat: businessDeails.lat,
            long: businessDeails.long
        })
        .then((response)=>setDriver(response.data))
    }

    const handleSubmit= ()=>{
        if(!mapStatus){ //map not initialised yet
            return null
        }
        let geocoder= new window.google.maps.Geocoder();
        geocoder.geocode({location},(result, status)=>{
            if(status !=='OK')
                alert('Something went wrong')
            else{
                var r = new RegExp(' Goa ');
                //console.log(result)
                if(r.test(result[0].formatted_address)){
                    setItems([]);
                    history.push("/restautantPortal");
                }
                else{
                    alert('Please select a location within Goa')
                }
            }
        })
    }


    const taxes = total * 0.05;
    const classes = useStyles();
    return (
        <>
        <Navbar />
        <GetUserLocation setCurrentLocation={setLocation} />
        <Modal open={modalOpen}>
            <div className={classes.modal}>
                <IconButton onClick={()=>setModalOpen(false)} className={classes.closeButton}>
                    <CloseButton  />
                </IconButton>
                {
                    mapStatus?
                    <Map location={location} setLocation={setLocation} height='500px' />:
                    <p>Loading</p>
                }
                <div className={classes.flexRow}>
                    <p className={classes.driver}>
                        {`Your delivery Associate is ${driverName}`}
                        <br/>
                        {
                            secondsToHms()
                        }
                    </p>
                    <button onClick={handleSubmit}
                    className={classes.submitButton}>  
                     Submit
                    </button>
                </div>
            </div>
        </Modal>
        <Grid container className={classes.root} spacing={2}>
            <Grid className={classes.left} item xs>
                <MockMobile className={classes.svg}/>
            </Grid>
            <Grid item xs>
                <Box className={classes.box}>
                    <h1 className={classes.text}>Cart</h1>
                    {items?items.map((item,id) => (
                        <Card id={id} key={id} setItems={setItems}
                         item={item} deleteItem={deleteItem}/>
                    )):<p>Your cart is empty</p>}
                    <hr />
                    <h4>Order summary:</h4>
                    <p>Sub Total: ₹{total}</p>
                    <p>Taxes and Charges: ₹{taxes}</p>
                    <p>Total: ₹{total + taxes}</p>
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" color="primary">Shop More</Button>
                        <Button variant="contained" onClick={driverPageRedirect}
                        color="primary">Proceed To Checkout</Button>
                    </div>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Cart
