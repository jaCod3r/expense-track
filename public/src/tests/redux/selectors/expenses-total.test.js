import { expenses } from "../fixtures/expenses";
import { getTotalExpenses } from "../../../redux/selectors/expenses-total";

test('should return total expenses', () => {
  const result = getTotalExpenses(expenses)
  expect(result).toBe(21201)
})

test('should return 0 if no expenses', () => {
  const result = getTotalExpenses([])
  expect(result).toBe(0)
})

test('should correctly return if 1 expense', () => {
  const result = getTotalExpenses([expenses[0]])
  expect(result).toBe(200)
})