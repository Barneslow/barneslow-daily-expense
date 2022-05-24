import ExpenseItem from "../expense-item/expenseItem.component";
import Card from "../card/card.component";
import ExpensesFilter from "../expense-filter/expense-filter.component";
import ExpensesList from "../expenses-list/expenses-list.component";

import "./expenses.styles.css";
import { useState } from "react";

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (yearData) => {
    setFilteredYear(yearData);
  };

  let filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expense found</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onFilterYear={filterYearHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
