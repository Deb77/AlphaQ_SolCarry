//react
import React from "react";
import { useSelector } from "react-redux";

//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

//custom
import RestaurantCard from "./restaurantcard";
const useStyles = makeStyles({
    rootc: {
        maxWidth: 400,
        
      },
      mediac: {
        height: 250,
      },
      cards:{
        paddingTop: 80,
        paddingLeft: 160,
        paddingBottom: 180,
    }
  });
const RestaurantContent = () => {
//   const { restaurants } = useSelector((state) => state.data);
//   const restaurantArray = restaurants.restaurants;
const classes = useStyles();
   const restaurantArray = [
    {"name": "Adlem Goi Bar And Restaurant", "tags": ["Chinese, ", "North Indian."],"imageUrl":"https://i.ibb.co/pKbdPmQ/Screenshot-5.png", "_id": "01", },
    {"name": "Sanman Restuarant And Bar", "tags": ["Goan, ", "North Indian."],"imageUrl":"https://i.ibb.co/St0hVMr/139-1393968-restaurant-bar-wallpaper-modern-restaurant-design-ideas.jpg", "_id": "02", },
    {"name": "Annapurna Multi Cuisine Family Restaurant with Bar", "tags": ["Chinese, ", "Goan, ", "North Indian,"],"imageUrl":"https://i.ibb.co/9tczZMm/Restaurant-Images-HD.jpg", "_id": "03", },
    {"name": "Adlem Goi Bar And Restaurant", "tags": ["Chinese, ", "North Indian."],"imageUrl":"https://i.ibb.co/v1BZQD3/1000x-1.jpg", "_id": "01", },
    {"name": "Sanman Restuarant And Bar", "tags": ["Goan, ", "North Indian."],"imageUrl":"https://i.ibb.co/Ny95bDB/eresto-images1.jpg", "_id": "02", },
    {"name": "Annapurna Multi Cuisine Family Restaurant with Bar", "tags": ["Chinese, ", "Goan, ", "North Indian,"],"imageUrl":"https://i.ibb.co/rHfG4BD/oFCSY3.jpg", "_id": "03", },
    {"name": "Adlem Goi Bar And Restaurant", "tags": ["Chinese, ", "North Indian."],"imageUrl":"https://i.ibb.co/pKbdPmQ/Screenshot-5.png", "_id": "01", },
    {"name": "Sanman Restuarant And Bar", "tags": ["Goan, ", "North Indian."],"imageUrl":"https://i.ibb.co/9tczZMm/Restaurant-Images-HD.jpg", "_id": "02", },
    {"name": "Annapurna Multi Cuisine Family Restaurant with Bar", "tags": ["Chinese, ", "Goan, ", "North Indian,"],"imageUrl":"https://i.ibb.co/St0hVMr/139-1393968-restaurant-bar-wallpaper-modern-restaurant-design-ideas.jpg", "_id": "03", },
  ]
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
      <Grid container spacing={2} >
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
