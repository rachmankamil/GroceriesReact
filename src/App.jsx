import React from 'react';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import HomePage from "./pages/home"
import GroceriesPage from "./pages/groceries"

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Router Navigate</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/groceries">Groceries</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
