import { removeExpense, editExpense, addExpense } from "../../../redux/actions/expenses";


test('should setup remove expense action object', () => {
  const result = removeExpense({ id: '123abc' })
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  })
})

test('should setup edit expense action object', () => {
  const result = editExpense('123abc', { note: 'Updated Note' })
  expect(result).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'Updated Note'
    }
  })
})

test('should setup add expense action object', () => {
  const result = addExpense({ description: 'Description', note: 'Note', amount: 1000, createdAt: 0 })
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'Description',
      note: 'Note',
      amount: 1000,
      createdAt: 0
    }
  })
})


test('should setup add expense action object', () => {
  const result = addExpense()
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
