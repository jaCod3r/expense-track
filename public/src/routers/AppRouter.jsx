import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header.jsx';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.jsx';
import HelpPage from '../components/HelpPage.jsx'
import NotFoundPage from '../components/NotFoundPage.jsx'
import EditExpensePage from '../components/EditExpensePage.jsx'
import AddExpensePage from '../components/AddExpensePage.jsx'


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)


export default AppRouter