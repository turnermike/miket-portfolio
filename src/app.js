import React from 'react';
import ReactDOM from 'react-dom';
import './scss/main.scss';

class App extends React.Component {
  render() {
    return <h1>Welcome to REACT!! Hi</h1>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
