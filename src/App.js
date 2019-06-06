import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import DrinkMaker from './containers/DrinkMaker/DrinkMaker';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Layout>
          <DrinkMaker />
        </Layout>
      </div>
    </div>
  );
}

export default App;
