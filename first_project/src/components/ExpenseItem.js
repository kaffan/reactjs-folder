import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props)
{
    return (
      <div className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2 className="text-3xl font-bold underline">{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </div>
    );
}

export default ExpenseItem;