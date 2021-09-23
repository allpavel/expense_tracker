import React from 'react';
import { Budgets } from '../features/budget/budgets';
import { Transactions } from '../features/transactions/transactions';

export function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Expense Tracker</h1>
                <Budgets />
                <Transactions />
            </header>
        </div>
    );
};