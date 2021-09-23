import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editBudgets } from '../features/budget/budgetSlice';
import { selectTransactions } from '../features/transactions/transactionsSlice';

export const Budget = ({ budget }) => {
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(budget.amount);
    const transactions = useSelector(selectTransactions);

    const handleEdit = event => {
        event.preventDefault();
        dispatch(editBudgets({ category: budget.category, amount: amount}));
    };

    const calculateTotal = () => {
        return transactions[budget.category].map(transaction => transaction.amount).reduce((amount1, amount2) => amount1 + amount2, 0);
    };

    const getFundRemainingsClassName = (amount) => {
        if (parseFloat(amount) === 0) {
            return null;
        }
        return parseFloat(amount) > 0 ? 'positive' : 'negative';
    };

    const remainingFunds = Number.parseFloat(budget.amount - calculateTotal()).toFixed(2);
    const fundRemainingsClassName = getFundRemainingsClassName(remainingFunds);

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
            <h4 className={'remaining-funds ' + fundRemainingsClassName}>Funds Remaining: {remainingFunds}</h4>
        </li>
    );
};