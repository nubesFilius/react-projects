import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
  function addNewExpenseData(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddNewExpense(expenseData);
  }

  return (
    <div className="new-expense ">
      <ExpenseForm onFormSubmit={addNewExpenseData}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
