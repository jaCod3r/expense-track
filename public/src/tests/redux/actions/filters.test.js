import { sortByAmount, sortByDate, setStartDate, setEndDate, setTextFilter } from "../../../redux/actions/filters";
import moment from 'moment';


test('should setup sort by amount filter action object', () => {
  const result = sortByAmount()
  expect(result).toEqual({
    type: 'SORT_BY_AMOUNT'
  })
})

test('should setup sort by date filter action object', () => {
  const result = sortByDate()
  expect(result).toEqual({
    type: 'SORT_BY_DATE'
  })
})

test('should setup start date action filter action object', () => {
  const result = setStartDate(moment(0))
  expect(result).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})

test('should setup end date action filter action object', () => {
  const result = setEndDate(moment(0))
  expect(result).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})

test('should setup text filter action object', () => {
  const result = setTextFilter()
  expect(result).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})

test('should setup text filter action object with default parameters', () => {
  expect(setTextFilter('gas')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'gas'
  })
})
