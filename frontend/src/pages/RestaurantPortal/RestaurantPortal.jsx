import React from 'react';
import OrdersTable from '../../components/OrdersDisplay/OrdersTabel'
import AddMenuItem from '../../components/MenuItem/AddMenuItem';
import MenuDisplay from '../../components/MenuItem/MenuDisplay';
import { makeStyles } from '@material-ui/core/styles';

const useStyles= makeStyles({
    heading: {
        textAlign: 'center',
    },
    form: {
        margin:10,
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
                    <div className={styles.form}>
                        <p>Add an new item</p>
                        <AddMenuItem />
                    </div>
                </div>
        </div>
        <MenuDisplay />
        </>
    );
}

export default RestaurantPortal;