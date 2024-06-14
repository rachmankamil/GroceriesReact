import React from 'react';
import { Routes, Route, BrowserRouter, Link } from "react-router-dom"
import HomePage from "./pages/home"
import GroceriesPage from "./pages/groceries"
import ContactUsPage from './pages/contact-us';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Router Navigate</h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/groceries">Groceries</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/groceries" element={<GroceriesPage />} />
          <Route path='/contact' element={<ContactUsPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
