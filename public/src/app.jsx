import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter.jsx'
import { Provider } from 'react-redux';
import store from './redux/store/store.jsx'
import 'normalize.css';
import './styles/styles.scss';

import { getVisibleExpenses } from './redux/selectors/expenses.jsx';
import 'react-dates/lib/css/_datepicker.css'


const reduxStore = store();


const state = reduxStore.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
console.log(visibleExpenses)

//const state = reduxStore.getState()
console.log(reduxStore.getState())

const jsx = (
  <Provider store={reduxStore}>
    <AppRouter />
  </Provider>

)

ReactDOM.render(jsx, document.getElementById('root'))