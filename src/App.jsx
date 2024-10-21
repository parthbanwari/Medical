import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PDFUploader from './FileUpload';
import { BrowserRouter } from 'react-router-dom'
import Summary from './Summary';

function App() {
  return (
    <Routes>
    <Route path="/" element={<PDFUploader />} />
    <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
