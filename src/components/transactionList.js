import React from 'react';
import { Transaction } from './transaction';

export const TransactionList = ({ transactions }) => {
    return (
        <section className="new-transactions-section">
            <h2>Transactions</h2>
            <ul className="new-transaction-list">
                {transactions.map(transaction => (
                    <Transaction transaction={transaction} key={transaction.id} />
                ))}
            </ul>
        </section>
    );
};