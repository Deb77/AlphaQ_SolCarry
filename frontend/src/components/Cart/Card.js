import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Counter from './Counter'

const useStyles = makeStyles(() => ({
    item: {
        display: 'flex',
        justifyContent:'space-between',
        margin:20
    },
    image: {
        margin: 5,
        marginBottom: 0,
        width: 75,
        height: 75,
        borderRadius:10
    },
    left: {
        display: 'flex'
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        
        alignItems:'center'
    }
}));

const Card = ({ item, setItems, deleteItem,id }) => {
    const classes = useStyles();
    const {
        name,
        img,
        price
    } = item;

    return (
        <>
        <div className={classes.item}>
            <div className={classes.left}>
                <img src={img} className={classes.image} />
                <h4>{name}</h4>
            </div>
            <div className={classes.right}>
                <h5>Price:₹{price}</h5>
                <DeleteIcon onClick={() => deleteItem(name)} style={{ color: "red" }} fontSize='large'/>
            </div>
        </div>
        <Counter value={item} setValue={setItems} id={id} />
        </>
    )
}

export default Card
