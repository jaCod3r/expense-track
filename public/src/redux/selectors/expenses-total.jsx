export const getTotalExpenses = (expenses) => {

  if (expenses.length !== 0) {
    let total = expenses.map((expense) => {
      return expense.amount
    }).reduce((sum, expense) => {
      return sum + expense
    })
    return total
  } else {
    return 0
  };



}