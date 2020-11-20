import React from 'react';
import OrdersTable from '../../components/OrdersDisplay/OrdersTabel'
import AddMenuItem from '../../components/MenuItem/AddMenuItem';
import MenuDisplay from '../../components/MenuItem/MenuDisplay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({

});

const RestaurantPortal = () => {

    const styles= useStyles()
    return (
        <>
        <div>
            <OrdersTable />
            <AddMenuItem />
        </div>
        <MenuDisplay />
        </>
    );
}

export default RestaurantPortal;