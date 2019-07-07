import React from 'react';
import { connect } from 'react-redux'
import numeral from 'numeral';
import { getVisibleExpenses } from '../redux/selectors/expenses.jsx';
import { getTotalExpenses } from '../redux/selectors/expenses-total.jsx';


const ExpenseSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpenseTotal = numeral(expenseTotal / 100).format('$0,0.00')
  return (
    <div>Viewing {expenseCount} {expenseWord} totaling {formattedExpenseTotal}</div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: getTotalExpenses(visibleExpenses)
  }

}

export default connect(mapStateToProps)(ExpenseSummary)