import { useState } from "react";

import ExpenseDate from "../expense-date/expense-date.component";
import Card from "../card/card.component";

import "./expenseItem.styles.css";

const ExpenseItem = (props) => {
  const { date, amount, title } = props;

  return (
    <Card className="expense-item">
      <div className="expense-item__description">
        <ExpenseDate date={date} />
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
