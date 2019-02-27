import * as React from 'react';
import './App.css';

import logo from './nav-logo.png';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Data Catalog</h1>
        </header>
        <p className="App-intro">
            Welcome to Data Catalog
        </p>
      </div>
    );
  }
}

export default App;
