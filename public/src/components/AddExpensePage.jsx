import React from 'react';
import ExpenseForm from './ExpenseForm.jsx';
import { connect } from 'react-redux'
import { addExpense } from '../redux/actions/expenses.jsx';

const AddExpensePage = (props) => (
  <div>
    <h1>This is from add expense component!</h1>
    <ExpenseForm onSubmit={(expense) => {
      props.dispatch(addExpense(expense))
      props.history.push('/')
    }} />
  </div>
)

export default connect()(AddExpensePage)