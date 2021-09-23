import React from 'react';
import { useSelector } from 'react-redux';
import { selectBudgets } from './budgetSlice';
import { Budget } from '../../components/budget';


export const Budgets = () => {
    const budgets = useSelector(selectBudgets);

    return (
        <ul className="comments-container">
            {budgets.map(budget => (
                <Budget budget={budget} key={budget.category} />
            ))}
        </ul>
    );
};