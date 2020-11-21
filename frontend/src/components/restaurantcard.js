import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
    rootc: {
        
        textDecoration: 'none',
        marginBottom: 50,
        height:340,
        width: 500
      },
      mediac: {
        height: 250,
      },
      linkt: {
        textDecoration: 'none',
        color: 'grey',
      },
      link: {
        textDecoration: 'none',
        color: 'black',
      },
  });


export default function RestaurantCard(props) {
    const classes = useStyles();
    const {
      name,
      description,
      image,
      _id,
    } = props;
  
    let restUrl = name.split(" ");
    restUrl = restUrl.join("-").toLowerCase();
    
    
    return (
        <Card elevation={6} className={classes.rootc}>
        <CardActionArea>
            <Link 
            className={classes.link}
            to={{
                pathname: `Business/${restUrl}`,
                state: {
                restId: _id,
                },
            }}
            >
                <CardMedia
                className={classes.mediac}
                image={image}
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2" className={classes.link}>
                {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p" className={classes.linkt}>
                {description}
                </Typography>
                </CardContent>
            </Link>
        </CardActionArea>
        </Card>
    );
  }
  