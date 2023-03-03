import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HowMuch from './how_much/HowMuch';
import ListDates from './list_dates/ListDates';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HowMuch />} />
        <Route path="/listDates" element={<ListDates />} />
      </Routes>
    </Router>
  );
}

export default App;