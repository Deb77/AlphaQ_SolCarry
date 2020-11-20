import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Modal } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddMenuItem from './AddMenuItem';
import {ReactComponent as CloseButton} from '../../Assets/close-black-18dp.svg';


const useStyles = makeStyles({
    modal:{
        width: '700px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        position: 'relative',
        backgroundColor: '#fff',
        border: '0',
        outline: '0',
        top      : '10%',
        left     : '50%',
        right    : 'auto',
        bottom   : 'auto',
        marginRight: '-50%',
        transform: 'translateX(-50%)',
        paddingLeft: '20px',
    },
    container: {
      backgroundColor: '#e17e51',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      padding: '20px',
      '& h3':{
          width: '500px',
          fontSize: '48px',
          paddingBottom: '20px',
          textAlign: 'center',
            fontFamily: 'weasthood',
          letterSpacing: '2px',
          marginLeft: '30%',
          color: '#fff',

        }
    },
    table:{
        width: '700px',
        margin: 'auto',
        fontFamily: 'Montserrat'
    },
    heading:{
        '& td':{
            fontSize: '22px',
            fontWeight: '500',
            paddingBottom: '20px'
        }
    },
    closeButton:{
        '&.MuiIconButton-root':{
          left: '10px',
          top: '10px',
          width: '45px',
          height:'45px'
        }
    },
    input:{
        display: 'grid',
        gridTemplateColumns: '100%',
        gridRowGap: '20px',
        width: '500px',
        paddingLeft: '20px'
    }
  
});

function createData(name, calories, fat, carbs, protein) {
    return { item:name, id:calories, details:fat, price:carbs };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, "2xchickentandoori", 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
  

const MenuDisplay = () => {
    const [modalIsOpen,setIsOpen] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    function openModal() {
      setIsOpen(true);
    }
      
    function closeModal(){
      setIsOpen(false);
    }

    const handleEdit=(id)=>{
        setSelectedItemId(id);
        openModal()
    };

    const handleDelete=()=>{
        console.log(1)
    };

    const classes = useStyles();
    
    return (
        <>
        <Modal open={modalIsOpen}>
            <div className={classes.modal} >
                <IconButton onClick={closeModal} className={classes.closeButton}>
                    <CloseButton  />
                </IconButton>
                <div className={classes.input}>
                    <AddMenuItem />
                </div>
            </div>
        </Modal>
        <div className={classes.container}>
            <h3>Menu</h3>
            <table className={classes.table}>
                <tr className={classes.heading}>
                    <td>Item</td>
                    <td>Price</td>
                    <td>Actions</td>
                </tr>
                {
                    rows.map((value,index)=>(
                        <tr>
                            <td>{value.item}</td>
                            <td>{value.price}</td>
                            <td>
                                <IconButton onClick={()=>handleEdit(value.id)}>
                                    <EditIcon/>
                                </IconButton>
                                |
                                <IconButton onClick={()=>handleDelete(value.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </div>
        </>
    );
}

export default MenuDisplay;