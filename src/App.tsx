import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { StatusDisplay } from './components/StatusDisplay';
import { AdminPanel } from './components/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StatusDisplay />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;