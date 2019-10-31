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
        <Route path='/login'>
          <LoginPage/>
        </Route>
        <Route path='/' render={(props => <MainPage {...props}/>)} />
      </Switch>
    </Router>
    
    
  );
}

export default App;
