import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from '../features/budget/budgetSlice';
import transactionsReducer from '../features/transactions/transactionsSlice';

export default configureStore({
    reducer: {
        budgets: budgetReducer,
        transactions: transactionsReducer
    },
});