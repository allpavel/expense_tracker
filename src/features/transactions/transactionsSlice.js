import { createSlice } from '@reduxjs/toolkit';

export const categories = ["food", "clothing", "entertainment"];

const initialState = Object.fromEntries(categories.map(category => [category, []]));

const options = {
    name: "transactions",
    initialState: initialState,
    reducers: {
        addTransaction: (state, action) => {
            state[action.payload.category].push(action.payload);
        },
        deleteTransaction: (state, action) => {
            state[action.payload.category] = state[action.payload.category].filter(transaction => transaction.id !== action.payload.id);
        }
    }
};

const transactionsSlice = createSlice(options);

export const selectTransactions = state => state.transactions;
export const selectFlattenedTransactions = state => Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;