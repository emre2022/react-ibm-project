import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Modal from 'react-modal';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const [error, setError] = useState(false);

    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        setNewBudget(updatedBudget);

        if (updatedBudget > 20000) {
            setError(true);
        } else {
            setError(false);
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span> Budget: £ </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
            <Modal
                isOpen={error}
                onRequestClose={() => setError(false)}
                contentLabel="Error Modal"
            >
                <p style={{ color: 'red' }}>Budget cannot exceed £20,000!</p>
                <button onClick={() => setError(false)}>Close</button>
            </Modal>
        </div>
    );
};

export default Budget;
