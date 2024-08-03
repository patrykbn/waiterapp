import styles from './Main.module.scss';
import { fetchTablesThunk, getAllTables } from '../../../redux/tablesRedux';
import { useDispatch, useSelector } from 'react-redux';
import Tablerow from '../../common/Tablerow/Tablerow';
import { useEffect, useState } from 'react';

const Main = () => {

    const dispatch = useDispatch();
    const tables = useSelector(state => getAllTables(state));
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(fetchTablesThunk()).then(() => setLoading(false));
    }, [dispatch]);

    return (
        <div className={styles.appwindow}>
            <div className={styles.appcontainer}>
                <span className={styles.apptitle}>All Tables:</span>
            </div>
            {loading ? (<span>Loading tables, please wait...</span>) : ( 
            <div className={styles.tablescontainer}>
                <ul>
                    {tables.map(table => <Tablerow key={table.id} id={table.id} tableNr={table.tableNr} tableStatus={table.tableStatus} tableBill={table.bill}/>)}
                </ul>
            </div>
            )}
        </div>
    )
}

export default Main