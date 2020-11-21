//react
import React, { useEffect, useState } from "react";

//M-UI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import {filter,orderBy} from 'lodash'


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
const RestaurantContent = ({setBusinessDeails, location, category, mapStatus, setbusinessId}) => {
  const [restaurantArray, setRestaurantArray] = useState([]);
  const [restaurantApiResults, setRestaurantApiResults] = useState([]);
  useEffect(() => {
    axios.get('https://solcarry-backend.herokuapp.com/business')
    .then(res => setRestaurantApiResults(res.data))
  }, [])

  useEffect(()=>{
    if (mapStatus){
    let businesses= [...restaurantApiResults]//filter(restaurantApiResults,(o)=>o.type===category);
    let originsArray=[];
    businesses.forEach((value)=>{
      originsArray.push({lat: parseFloat(value.lat), lng:parseFloat(value.long)})
    });
    let options={
    origins: [...originsArray],
      destinations: [location], //.[restaurantlocation, user location]
      travelMode: 'DRIVING',
    };
    if(originsArray.length !==0){
      var service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(options, (response, status)=>{
          console.log(response)
          if(status==='OK'){
            for(let i=0;i<businesses.length;i++){
              if(response.rows[i].elements[0].status==='OK'){
                businesses[i].__v=(response.rows[i].elements[0].duration.value);
              }
              else
                  businesses[i].__v=(999999999999999);
              }
              console.log(businesses)
              let sortedBusinesses= orderBy(businesses,['__v'],['desc'])
              setRestaurantArray(sortedBusinesses);
           }
      });
    }
    }
  },[restaurantApiResults,location,category,mapStatus]);

const classes = useStyles();

  const handleSelectValue= (value)=>{
    setBusinessDeails(value)
    setbusinessId(value._id)
  }

  const getRestaurantCard = (restaurantObj) => {
    return (
      <Grid item xs={12} sm={4} key={restaurantObj._id} onClick={()=>handleSelectValue(restaurantObj)} >
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
