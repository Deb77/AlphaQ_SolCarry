//react
import React, { useEffect, useState } from "react";

//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";


//custom
import RestaurantCard from "./restaurantcard";
import axios from 'axios';

const useStyles = makeStyles({
    rootc: {
        width: 600,
        
      },
      mediac: {
        height: 250,
      },
      cards:{
        paddingTop: 80,
        
        paddingBottom: 180,
    }
  });
const RestaurantContent = () => {
  const [restaurantArray, setRestaurantArray] = useState([]);
  useEffect(() => {
    axios.get('https://solcarry-backend.herokuapp.com/business')
    .then(res => setRestaurantArray(res.data))
  }, [])
  // const restaurantArray = [

  // ]
//   const { restaurants } = useSelector((state) => state.data);
//   const restaurantArray = restaurants.restaurants;
const classes = useStyles();

  const getRestaurantCard = (restaurantObj) => {
    return (
      <Grid item xs={12} sm={4} key={restaurantObj._id} >
        <RestaurantCard {...restaurantObj} />
      </Grid>
    );
  };
  return (
    <>
      <Box display="flex" className={classes.cards}>
      <Grid container spacing={10} >
        {restaurantArray ? (
          restaurantArray.length > 0 ? (
            restaurantArray.map((restaurant) => getRestaurantCard(restaurant))
          ) : (
            <p>
              No Restaurants currently available in your area, come back Later.
            </p>
          )
        ) : (
          <p>Server Error, come back Later.</p>
        )}
      </Grid>
      </Box>
    </>
  );
};

export default RestaurantContent;
