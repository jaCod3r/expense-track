import React from 'react';
import { shallow } from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm';
import { expenses } from '../redux/fixtures/expenses';

test('', () => {
  const wrapper = shallow(<ExpenseForm />)
  expect(wrapper).toMatchSnapshot()
})

test('', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot()
})