import React from 'react';
import { shallow } from 'enzyme';
import { expenses } from '../redux/fixtures/expenses.js';
import ExpenseListItem from '../../components/ExpenseListItem.jsx';

test('should render expense list with expense', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})