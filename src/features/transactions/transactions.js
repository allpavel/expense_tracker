import React from 'react';
import { useSelector } from 'react-redux';
import { selectFlattenedTransactions } from './transactionsSlice';
import { TransactionList } from '../../components/transactionList';
import { TransactionForm } from '../../components/transactionsForm';

export const Transactions = () => {
    const transactions = useSelector(selectFlattenedTransactions);

    return (
        <div className="comments-container">
            <TransactionList transactions={transactions} />
            <TransactionForm />
        </div>
    );
};