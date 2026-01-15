import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './components/Homepage';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;