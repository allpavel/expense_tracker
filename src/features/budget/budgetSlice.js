import { createSlice } from '@reduxjs/toolkit';

export const categories = ["food", "clothing", "entertainment"];

const initialState = categories.map(category => ({ category: category, amount: 0 }));

const options = {
    name: 'budgets',
    initialState: initialState,
    reducers: {
        editBudgets: (state, action) => {
            const newBudget = state.find(budget => budget.category === action.payload.category);
            if (newBudget) {
                newBudget.amount = action.payload.amount;
            }
        }
    }
};

const budgetSlice = createSlice(options);

export const { editBudgets } = budgetSlice.actions;

export default budgetSlice.reducer;

export const selectBudgets = state => state.budgets;