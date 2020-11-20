import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    container:{
        display: 'grid',
        width: 160,
        gridTemplateColumns: 'repeat(3,50px)',
        gridColumnGap: '5px',
        margin: 0,
        paddingLeft: 20,
        height: '50px',
        '& div':{
            width: '100%',
            height: '100%',
            fontSize: '36px',
            textAlign: 'center'
        },
        '& button':{
            width: '100%',
            height: '100%',
            outline: 0,
            border: 0,
            borderRadius: '30px'
        }
    },
    minusButton:{
        border: '2px solid #e17e51 !important',
        backgroundColor: '#fff',
    },
    plusButton:{
        backgroundColor: '#e17e51',
    },
})

const Counter = ({value,setValue,id}) => {

    const handleDecrement=()=>{
        if(value.quantity!==0)
            setValue((prevState)=>{
                let values= [...prevState];
                values[id].quantity= values[id].quantity - 1;
                return(values)
            })
    }

    const handleIncerment=()=>{
        if(value.quantity!==5)
            setValue((prevState)=>{
                let values= [...prevState];
                values[id].quantity= values[id].quantity + 1;
                return(values)
            })
    }

    const styles= useStyles();
    return (
        <div className={styles.container}>
            <button className={styles.minusButton} onClick={handleDecrement}>
                <RemoveIcon style={{color:'#e17e51'}} />
            </button>
            <div>
            {value.quantity}
            </div>
            <button className={styles.plusButton} onClick={handleIncerment}>
                <AddIcon />
            </button>
        </div>
        
    );
}

export default Counter;