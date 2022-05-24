import { useState } from "react";

import ExpenseForm from "../expense-form/expense-form.component";
import "./new-expense.styles.css";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };
  const saveDatahandler = (expenseData) => {
    const data = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(data);
    setIsEditing(false);
  };

  return (
    <div className="new-expense" onClick={startEditingHandler}>
      {!isEditing && <button> Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveData={saveDatahandler}
          onCancelEditing={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
