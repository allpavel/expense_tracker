import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editBudgets } from '../features/budget/budgetSlice';

export const Budget = ({ budget }) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(budget.amount);

    const handleEdit = event => {
        event.preventDefault();
        dispatch(editBudgets({ category: budget.category, amount: amount}));
    };

    return (
        <li className="budget-container">
            <div className="category-label">Category</div>{" "}
            <div className="category-wrapper">
                <h3 className="category-value">{budget.category}</h3>
                <form onSubmit={handleEdit} className="budget-form">
                    <input 
                        className="amount-input"
                        value={amount}
                        onChange={(event) => setAmount(event.currentTarget.value)}
                        type="number"
                        step="0.01" />
                    <button className="update-button">Update</button>
                </form>
            </div>
            <h4>Funds Remaining: {budget.amount}</h4>
        </li>
    );
};