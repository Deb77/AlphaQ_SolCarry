import React,{useState, useEffect} from "react";
//redux
import { useSelector } from "react-redux";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";


//custom
import Navbar from './navbar';
import Item from './ItemCard';
import { Link } from "react-router-dom";
import Axios from "axios";

const useStyles = makeStyles({
  rightheading: {
    marginTop: 50,
    fontSize: 50,
  },
  rightdesc: {
    marginTop: 20,
    marginRight : 200,
    fontSize: 20,
  },
  root: {
    maxWidth: '80%',
    marginTop: 60,
    marginLeft: 60
  },
  media: {
    height: 450,
  },
});

function Restaurant({setItems,businessDeails}) {
  const classes = useStyles();
  const [DisplayItems, setDisplayItems]= useState([])

  useEffect(()=>{
    Axios.get('https://solcarry-backend.herokuapp.com/item',{
      businessId: businessDeails._id
    })
    .then(response=>setDisplayItems(response.data))
  },[businessDeails])

  const addItem= (item,id)=>{
    let updatedDisplayItems= [...DisplayItems]
    updatedDisplayItems.splice(id,1);
    setDisplayItems(updatedDisplayItems)
    setItems((prevState)=>([...prevState, {
      name: item.name,
      img: item.image,
      price: item.price,
      quantity: 1
    }]))
  };

  return (
    <>
    <Link to='/cart'>CART</Link>
          <Navbar />
          {/* <Grid container direction="row">
            <Grid item xs={false} sm={1} />
            <Grid item xs={12} sm={6} style={{ marginTop: 120 }}>
              <Typography
                gutterBottom
                variant="h4"
                component="h2"
                style={{ fontStyle: "bold" }}
              >
                AJ's
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Costs Rs.{costForOne} for one
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Minimum order Rs.{minOrderAmount}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                {paymentString}
              </Typography>
              <br />
              <Typography variant="body2" color="textPrimary">
                Address: {addressString}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Call: +91 {phoneNo}
              </Typography>
              <Typography variant="body2" color="textPrimary">
                Dine-In Timing: 1pm to 12am 
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} style={{ marginTop: 34 }}>
              {imageUrl ? (
                <SwipeableImages images={imageUrl} type="restaurant" />
              ) : null}
            </Grid>
            <div className={classes.borderLeft}></div>
            <div className={classes.borderBottom}></div>
            <Grid item xs={false} sm={1} />
          </Grid> */}
          <Grid container style={{marginBottom: '20px'}}>
            <Grid item xs={7}>
            <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image=  {businessDeails.image}
                    title="Contemplative Reptile"
                  />
              </Card>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.rightheading}>{businessDeails.name}</Typography>
              <Typography className={classes.rightdesc}>
                {businessDeails.description}
              </Typography>
            </Grid>
            </Grid>
            <Typography style={{fontSize: 30, marginTop: 60,marginLeft: 150,}}>Add Items into Cart</Typography>  
            <Grid container>
              {
                DisplayItems.map((value, id)=>(
                  <Grid item xs={4} key={id} onClick={()=>addItem(value,id)}>
                   <Item details={value}/>
                  </Grid>
                ))
              }
            </Grid>
    </>
  );
}

export default React.memo(Restaurant);
