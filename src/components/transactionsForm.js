import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTransaction, categories } from '../features/transactions/transactionsSlice';
import { v4 as uuidv4 } from 'uuid';

export const TransactionForm = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = useState(categories[0]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTransaction({
            category: category,
            description: description,
            amount: parseFloat(amount),
            id: uuidv4(),
        }));
        setCategory(categories[0]);
        setDescription('');
        setAmount(0);
    };

    return (
        <section className="new-transaction-section">
            <h2>New Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-wrapper">
                    <div>
                        <label for="category">Category</label>
                        <select id="category" value={category} onChange={(event) => setCategory(event.currentTarget.value)}>
                            {categories.map(category => (
                                <option key={category} value={category}>{category}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="description">Description</label>
                        <input id="description" value={description} onChange={(event) => setDescription(event.currentTarget.value)} type="text" />
                    </div>
                    <div>
                        <label htmlFor="amount">Amount</label>
                        <input id="amount" value={amount} onChange={(event) => setAmount(event.currentTarget.value)} type="number" step="0.01" />
                    </div>
                </div>
                <button>Add Transaction</button>
            </form>
        </section>
    );
};