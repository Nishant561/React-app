import React, { useContext, useState, useEffect } from 'react';
import { ExpenseContext } from '../utils/Utils';

function Balance() {
  const { state } = useContext(ExpenseContext);
  const [amt, setAmt] = useState(0);

  const calculateTotalAmount = () => {
    const totalAmount = state.reduce((acc, cv) => {
      if (cv.amount > 0) {
        return acc + parseInt(cv.amount, 10);
      }
      return acc;
    }, 0);
    setAmt(totalAmount);
  };

  useEffect(() => {
    calculateTotalAmount();
  }, [state]);

  return (
    <div className='balance'>
      <p>Your Balance</p>
      <h1>${amt}</h1>
    </div>
  );
}

export default Balance;
