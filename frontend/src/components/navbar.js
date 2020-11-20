//react
import React from 'react'
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

//mui

import { makeStyles } from '@material-ui/core/styles';

import Logo from '../images/download (1).png';
import Avatar from '@material-ui/core/Avatar';
import { Typography, Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import CartIcon from '@material-ui/icons/ShoppingCart';
import Modal from '@material-ui/core/Modal';

//custom
import './navbar.css';
import Login from "./Login/login";
import AuthService from "../Auth/auth.service";
import jwt_decode from "jwt-decode";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        backgroundColor: '#E17E51',
        color: 'white',
    },
    buttonStyles: {
    color: "black",
    margin: "8px 30px 0",
    display: "inline-block",
  },
  buttonStylesUser: {
    display: 'flex',
    margin: "15px 5px 0",
    fontSize: 20,
  },
  buttonStylesWelc: {
    display: 'flex',
    margin: "15px 5px 0",
    fontSize: 20,
  },
  heading:{
    fontFamily: 'weasthood',
    fontSize: 40 ,
    fontWeight: 600,
    marginLeft: 20,
    marginTop: 10,
    paddingRight: 1000,
    color: '#E17E51' ,
},
iconButton: {
    marginLeft: 15,
    marginRight: 25,
    color: '#E17E51' ,
    marginTop: 5,
  },
  paper: {
    position: 'absolute',
    width: 400,
    marginLeft: 690,
    marginTop: 200,
  },
    

  }));
  
function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);
  

   const handleLogout = () => {
    AuthService.logout();
    history.go(0)
   };

   const body = (
    <div  className={classes.paper}>
      <Login  />
      
    </div>
  );
   const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
   
  const user = AuthService.getCurrentUser();
  
    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" >
                <Avatar alt="SolCurryLogo" src={Logo} className={classes.large} />
                <Typography className={classes.heading}>SOLCARRY</Typography>
                </Link>
                
                { user? (
            <div className={classes.buttons}>
              <Box display='flex' >
              <Typography className={classes.buttonStylesWelc}>
                Hey, 
              </Typography>
              <Typography className={classes.buttonStylesUser}>
                {jwt_decode(user).user.name}!
              </Typography>
              <Link to="/cart">
                <IconButton  type="submit" className={classes.iconButton} aria-label="search"><CartIcon size="large" /></IconButton>
              </Link>
              
              <Button size="large" onClick={handleLogout} variant="contained" className={classes.button}>LOGOUT</Button>
              </Box>
            </div>
        ) : (
          <div className={classes.buttons}>
            
                <Button onClick={handleOpen} size="large" variant="contained" className={classes.button}>LOGIN</Button>
          </div>
        )}
            </div>
        </nav>
        <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
        </>
    )
}

export default Navbar