import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as MockMobile } from '../../Assets/cart.svg';
import Card from './Card';

const useStyles = makeStyles(() => ({
    root: {
        margin: 10,
    },
    svg: {
        height: 600,
        width: 600,
        margin:20
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
    }
}));

const Cart = () => {
    const [total, setTotal] = useState(0);
    const [items, setItems] = useState([]);

    const data = [{
        quantity: 2,
        name: "Manchhurian",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 400
    },
    {
        quantity: 4,
        name: "Chicken 65",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 40
    },
    {
        quantity: 3,
        name: "Kebabs",
        img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        price: 500
        }];

    useEffect(() => {
        if (localStorage.getItem('cart') === undefined) {
        localStorage.setItem('cart', JSON.stringify(data));
        }
    }, [])
    
    useEffect(() => {
        setItems(localStorage.getItem('cart'));
    }, [localStorage.getItem('cart')])
    
    useEffect(() => {
        items.forEach((item) => {
            setTotal(prev => prev+item.price)
        })
    }, [])

    const deleteItem = (name) => {
        const cart = items.filter(item => item.name !== name);
        localStorage.setItem('cart', cart);
    }


    const taxes = total * 0.05;
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid className={classes.left} item xs>
                <MockMobile className={classes.svg}/>
            </Grid>
            <Grid item xs>
                <Box className={classes.box}>
                    <h1 className={classes.text}>Cart</h1>
                    {items?items.map(item => (
                        <Card item={item} deleteItem={deleteItem}/>
                    )):<p>Your cart is empty</p>}
                    <hr />
                    <h4>Order summary:</h4>
                    <p>Sub Total: ₹{total}</p>
                    <p>Taxes and Charges: ₹{taxes}</p>
                    <p>Total: ₹{total + taxes}</p>
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" color="primary">Shop More</Button>
                        <Button variant="contained" color="primary">Proceed To Checkout</Button>
                    </div>
                </Box>
            </Grid>
      </Grid>
    )
}

export default Cart
