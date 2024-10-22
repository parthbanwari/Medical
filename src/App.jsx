import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PDFUploader from './FileUpload';
import Summary from './Summary';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PDFUploader />} />
        <Route path="/summary" element={<Summary />} />
      </Routes>
    </Router>
  );
}

export default App;

