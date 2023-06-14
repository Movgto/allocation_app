import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, totalExpenses, currency } = useContext(AppContext);

    const setBudget = (val) => {

        const setValue = val < budget ? -10 : 10;

        if(budget + setValue < totalExpenses) {
            alert("Budget should be at least equal to total expenses");
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: budget + setValue
        });
    };

    return (
        <div className='alert alert-secondary'>
            <label for='budget'>Budget: {currency}</label>
            <input id='budget' type='number' onChange={(e)=>setBudget(e.target.value)} value={budget} required/>
        </div>
    );
};
export default Budget;
