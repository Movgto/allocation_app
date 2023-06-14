import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import '../stylesheets/CurrencySelector.css';

const CurrencySelector = () => {
    const { dispatch } = useContext(AppContext);

    const setCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val
        });
    };

    return (
        <div className='custom-select'>
            <select id='currency-select' onChange={e=>setCurrency(e.target.value)}>
                <option defaultValue value='£'>£ Pound</option>
                <option value='$'>$ Dollar</option>
                <option value='€'>€ Euro</option>
                <option value='₹'>₹ Ruppee</option>
            </select>
        </div>
    );
};

export default CurrencySelector;