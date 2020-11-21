import React,{useState, useEffect} from "react";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";


//custom
import Navbar from './navbar';
import Footer from './footer';
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
    width: 900,
    marginTop: 60,
    marginLeft: 60
  },
  media: {
    height: 450,

  },
});

function Restaurant({setItems,businessDeails,businessId}) {
  const classes = useStyles();
  const [DisplayItems, setDisplayItems]= useState([])

  useEffect(()=>{
    console.log('mounted')
    Axios.post('http://solcarry-backend.herokuapp.com/item/specific',{
      businessId: businessId
    })
    .then(response=>setDisplayItems(response.data))
    return(()=>setDisplayItems([]))
  },[businessId])

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
          <Navbar />
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
            <Footer />
    </>
  );
}

export default React.memo(Restaurant);
