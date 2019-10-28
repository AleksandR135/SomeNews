import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import '../App.css';
import MainPage from './components/MainPage'

function App() {
  return (
    <Router>
      <Route path='/' render={(props => <MainPage {...props}/>)} />
    </Router>
  );
}

export default App;
