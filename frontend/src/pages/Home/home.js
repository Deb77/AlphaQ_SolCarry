//react
import React, { Fragment,  useState , useEffect } from 'react';
import { useHistory } from 'react-router-dom';


//Mui
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LocationIcon from '@material-ui/icons/LocationOn';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

//Custom Components
import Navbar from '../../components/navbar';
import RestaurantContent from "../../components/restaurantcontent";
import GetUserLocation from '../../components/SelectLocationOnMap/GetUserLocation';

const categories = [
    {
        value: 'Restaurant',
          label: 'Restaurant',
        },
    {
      value: 'Grocery',
      label: 'Grocery',
    },
      {
        value: 'Home Chef',
        label: 'Home Chef',
      },
      {
        value: 'Other',
        label: 'Other',
      },
  ];
const useStyles = makeStyles((theme) => ({
    heading:{
        fontFamily: 'weasthood',
        fontSize: 230 ,
        fontWeight: 600,
        color: '#E17E51' ,
    },
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignContent: 'center',
        width: '55%',
        borderColor: '#E17E51' ,
        
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
        color: '#E17E51' ,
      },
      rootc: {
        maxWidth: 400,
        
      },
      mediac: {
        height: 250,
      },
      cards:{
          paddingTop: 100,
          paddingLeft: 180
      }
 }));
const Home =({mapStatus, setBusinessDeails}) => {
    
    const classes = useStyles();
    const history = useHistory();
    const [category, setCategory] = React.useState('Restaurant');
    const [search, setSearch] = React.useState('');
    const [locationPlaceholder, setLocationPlaceholder] = React.useState('Goa');
    const [currentLocation, setCurrentLocation] = React.useState({
      lat: 15.292158,
      lng: 73.969542
    });
    useEffect(()=>{
      if(mapStatus){ //map not initialised yet
        let geocoder= new window.google.maps.Geocoder();
        geocoder.geocode({location:currentLocation},(result, status)=>{//gets address from lat lng
            if(status ==='OK'){
              console.log(result)

              setLocationPlaceholder(result[0].address_components[2].long_name)
            }
        })
      }
    },[currentLocation,mapStatus])
    const handleChangeCategory = (event) => {
        setCategory(event.target.value);
      };
      // const restaurantArray = [
      //   {"name": "Adlem Goi Bar And Restaurant"},
      //   {"name": "Sanman Restuarant And Bar"}, 
      //   {"name": "Annapurna Multi Cuisine Family Restaurant with Bar"},
      // ]
      // const groceryArray = [
      //   {"name": "Adlem Goi Bae And Restaurant"},
      //   {"name": "Sanman Restuarant And Bar"}, 
      //   {"name": "Annapurna Multi Cuisine Family Restaurant with Bar"},
      // ]
    const handleChangeSearch = (event) => {
        setSearch(event.target.value);
      };

      const [locationStatus, setLocationStatus] = useState(
        localStorage.getItem("location") ? true : false
      );
      let latlng = localStorage.getItem("latlng");

      //  if (latlng) {
      //    const latlngArray = latlng.split(", ");
      //    dispatch(fetchRestaurantsByAddress(latlngArray[0], latlngArray[1]));
      //  }
      
      const handleSubmit = (event) => {
        let restUrl = search.split(" ");
        restUrl = restUrl.join("-").toLowerCase();
        history.push(`/Business/${restUrl}`)};
    return(
        
        <Fragment>
            <GetUserLocation setCurrentLocation={setCurrentLocation} />
            <Navbar />
            <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            >
            <Typography className={classes.heading}>SOLCARRY</Typography>
            
            <Paper component="form" variant="outlined" className={classes.root}>
                <TextField
                    id="standard-select-menu"
                    value={category}
                    onChange={handleChangeCategory}
                    style={{ width: "15%" }}
                    select
                    variant="outlined"
                    color='#E17E51'
                >
                     {categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
                        ))}
                </TextField>
                <InputBase
                    className={classes.input}
                    value={search}
                    onChange={handleChangeSearch}
                    placeholder={'Search for ' + category + ' in '+ locationPlaceholder +'.' }
                    inputProps={{ 'aria-label': 'search for stuff' }}
                />
                {/* <Autocomplete id="combo-box-demo" options={restaurantArray} getOptionLabel={(option) => option.name} style={{ width: "100%" }} renderInput={(params) => <TextField {...params} placeholder={'Search for ' + category + ' in Marcel, Goa.'} value={search} onChange={handleChangeSearch} variant="outlined" />}/>
                { category=="Restaurant"? ({}) : ({}) } */}
                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                    <LocationIcon />
                </IconButton>
                <IconButton type="submit" className={classes.iconButton} onClick={handleSubmit} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>
            <RestaurantContent mapStatus={mapStatus} location={currentLocation} category={category} setBusinessDeails={setBusinessDeails}  />
            </Box>
            
           
        </Fragment>
    )    
};

export default Home;