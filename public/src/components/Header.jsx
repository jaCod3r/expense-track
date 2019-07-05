import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeStyle={{
      fontWeight: "bold",
      color: "red"
    }} exact={true}>Go home</NavLink>
    <NavLink to="/create" activeStyle={{
      fontWeight: "bold",
      color: "red"
    }} >Create</NavLink>
    <NavLink to="/edit" activeStyle={{
      fontWeight: "bold",
      color: "red"
    }}>Edit</NavLink>
    <NavLink to="/help" activeStyle={{
      fontWeight: "bold",
      color: "red"
    }}>Help</NavLink>
  </header>
)

export default Header