import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//material-ui
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#E17E51',
    color: "white",
    marginTop: 60,
    height: "42vh",
    textAlign: "center",
    
  },
  innerCont: {
    // margin: "74px 40px 40px 40px",
    marginTop: 60,
  },
  resources: {
    // margin: "60px 40px 10px 40px",
    marginTop: 60,
  },
  heading: {
    marginBottom: 20,
    fontSize: 45
  },
  logo:{
    fontFamily: 'weasthood',
    letterSpacing: '2px',
    color: 'white',
},
para: {
    marginBottom: 20,
    paddingLeft: 50,
    paddingRight: 50,
  },
  buttonStyleOne: {
    textDecoration: 'none',
    backgroundColor: 'white',
        color: '#E17E51',
    "&:hover": {
      backgroundColor: "#5a5c5a",
    },
    
  },
  link: {
    textDecoration: 'none',
},
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid container direction="row" className={classes.container}>
      <Grid item xs={4} className={classes.innerCont}>
          <>
            <Typography variant="h4" component="p" className={classes.heading}>
            <span className={classes.logo}>SOLCARRY</span> For Business
            </Typography>
            <Typography variant="body1" component="p" className={classes.para}>
            Register with SOLCARRY and take your business to the next level.
            Online Delivery Platform tailored for the goan market.
            </Typography>
            <br />
            <Link to="/associateRegistration" className={classes.link}>
              <Button className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
          </>
        
      </Grid>
      <Grid item xs={4}  className={classes.innerCont}>
          <>
            <Typography variant="h4" component="p" className={classes.heading}>
              <span className={classes.logo}>SOLCARRY</span> For Drivers
            </Typography>
            <Typography variant="body1" component="p" className={classes.para}>
                Supliment your earnings by provinging deliveries to those in need.
            </Typography>
            <br />
            <Link to="/driverRegistration" className={classes.link}>
              <Button className={classes.buttonStyleOne}>Get Started</Button>
            </Link>
          </>
        
      </Grid>
      
      <Grid item xs={4} className={classes.resources}>
        <Typography variant="h4" component="p" className={classes.heading} >
            References and Material Used
        </Typography>
        <Typography variant="body1" component="p" className={classes.para}>
          - React Material UI Redux
          <br />
          - NodeJs <br />
          - Express <br />
          - MongoDB Atlas <br />
          - Dribble <br />
          - Google Font <br />
        </Typography>
      </Grid>
    </Grid>
  );
}
