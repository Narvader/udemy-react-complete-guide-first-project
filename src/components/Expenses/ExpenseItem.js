//import React, { useState } from 'react';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    /*const [title, setTitle] = useState(props.title);
    const clickHandler = () => {
        setTitle('Updated!');
        console.log(title);
    };*/

    return (
        <li>
            <Card id={props.id} className='expense-item'>
                <ExpenseDate date={props.date} />
                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                    <div className='expense-item__price'>${props.amount}</div>
                </div>
            </Card>
        </li>
    );
    //<button onClick={clickHandler}>Change title</button>
}

export default ExpenseItem;