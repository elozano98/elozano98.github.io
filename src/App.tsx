import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Layout>
        <Home />
      </Layout>
    </Router>
  );
}

export default App;