import React from 'react';
import Timer from './components/Timer/Timer';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <>
        <div>
            <h1>Counter APP</h1>
        </div>
        <Timer />
      </>
    )
  }
}

export default App;
