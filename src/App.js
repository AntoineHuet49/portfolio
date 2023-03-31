import React from 'react';
import './reset.css';
import './App.css';
import Accueil from './components/Accueil';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Accueil />    
      </div>
    );
  }
}

export default App;
