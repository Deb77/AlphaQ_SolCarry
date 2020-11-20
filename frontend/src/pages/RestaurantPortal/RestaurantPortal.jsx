import React from 'react';
import OrdersTable from '../../components/OrdersDisplay/OrdersTabel'
import AddMenuItem from '../../components/MenuItem/AddMenuItem';
import MenuDisplay from '../../components/MenuItem/MenuDisplay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    heading: {
        textAlign: 'center',
    }
});

const RestaurantPortal = () => {

    const styles= useStyles()
    return (
        <>
            <div>
                <h2 className={styles.heading}>Restaurant Portal</h2>
                <OrdersTable />
                <div className={styles.heading}>
                <AddMenuItem />
                </div>
        </div>
        <MenuDisplay />
        </>
    );
}

export default RestaurantPortal;