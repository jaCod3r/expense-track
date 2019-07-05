import expensesReducer from "../../../redux/reducers/expenses";
import { expenses } from "../fixtures/expenses";

test('should set up default start', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' })
  expect(state).toEqual([])
})

test('should remove expense by id', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[0].id }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([expenses[1], expenses[2]])
})

test('should not remove expense if id not found', () => {
  const action = { type: 'REMOVE_EXPENSE', id: '-1' }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses])
})

test('should add an expense', () => {
  const action = {
    type: 'ADD_EXPENSE', expense: {
      id: '109',
      description: 'Computer',
      note: 'bitwit',
      amount: 5000,
      createdAt: 10000
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual([...expenses, action.expense])
})

test('should edit an expense', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      description: 'Computer',
    }

  }
  const state = expensesReducer(expenses, action)
  expect(state[1].description).toBe(action.updates.description)
})


test('should not be able edit an expense if invalid id', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'Computer',
    }
  }
  const state = expensesReducer(expenses, action)
  expect(state).toEqual(expenses)
})