import './ExpenseItem.css';

// Convention is to repeat file name
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>February 3rd 2023</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$160</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
