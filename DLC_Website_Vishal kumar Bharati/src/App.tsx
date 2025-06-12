import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tutorials from './pages/Tutorials';
import AIChat from './pages/AIChat';
import Feedback from './pages/Feedback';
import AccessibilityControls from './components/AccessibilityControls';

export default function App() {
  // Font size state for accessibility
  const [fontSize, setFontSize] = useState(16);

  return (
    <Router>
      <div style={{ fontSize: `${fontSize}px` }} className="min-h-screen transition-all duration-300">
        <Navbar />
        <AccessibilityControls fontSize={fontSize} setFontSize={setFontSize} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/aichat" element={<AIChat />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </div>
    </Router>
  );
}
