import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'
import '../App.css';
import MainPage from './components/MainPage'
import LoginPage from './components/LoginPage'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/login' render={({ history }) => <LoginPage history={history} />} />
        <Route path='/' render={({ history }) => <MainPage history={history} />} />
      </Switch>
    </Router>
    
    
  );
}

export default App;
