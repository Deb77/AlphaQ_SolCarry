//react
import React from "react";

//material-ui
import makeStyles from "@material-ui/core/styles/makeStyles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia";


//custom
import Navbar from './navbar';
import Item from './ItemCard';

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

function Restaurant(props) {
  const classes = useStyles();
//   const { loading } = useSelector((state) => state.data);

  // const getRest = {

  // }
  
  return (
    <>
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
          <Grid container>
            <Grid item xs={7}>
            <Card className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    image="http://res.cloudinary.com/dtww61ulg/image/upload/v1605852593/dnsao9uysv5tmkvxb9ul.jpg"
                    title="Contemplative Reptile"
                  />
              </Card>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.rightheading}>AJ's</Typography>
              <Typography className={classes.rightdesc}>Ordered some meals from AJs and i must say they were really lip smacking. I tried a few rolls, burgers, pizzas and lasagna and were really tasty. They have introduced two new menus for the visitors and website to order from the comfort of your home. Do order. Recommended.</Typography>
              <Typography className={classes.rightdesc}>Price: ₹400</Typography>
            </Grid>
            </Grid>
            <Typography style={{fontSize: 30, marginTop: 60,marginLeft: 150,}}>Add Items into Cart</Typography>  
            <Grid container>
              <Grid item xs={4}>
                <Item />
              </Grid>
              <Grid item xs={4}>
                <Item />
              </Grid>
              <Grid item xs={4}>
                <Item />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Item />
              </Grid>
              <Grid item xs={4}>
                <Item />
              </Grid>
              <Grid item xs={4}>
                <Item />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={4}>
                <Item />
              </Grid>
              <Grid item xs={4}>
                <Item />
              </Grid>
              <Grid item xs={4}>
                <Item />
              </Grid>
            </Grid>
          
          
    </>
  );
}

export default React.memo(Restaurant);
