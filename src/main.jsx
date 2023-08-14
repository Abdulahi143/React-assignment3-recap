import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header.jsx'
import './index.css'
import { Home } from './home.jsx'
import { Counter } from './Counter.jsx'
import Users  from './users.jsx'
import { Engineers } from './Engineers.jsx'
import { Reducer } from './Reducer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Home />
    <Counter />
    <Engineers />
    <Users />
    <Reducer />
  </React.StrictMode>,
)
