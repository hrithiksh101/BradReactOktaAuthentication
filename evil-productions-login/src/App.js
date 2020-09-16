import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import { Security, SecureRoute, ImplicitCallback  , LoginCallback } from '@okta/okta-react';
import  Login from './components/auth/Login' 

function App() {
  const onAuthRequired = (history) => {
    history.push('/staff');
  };

  return (
    <BrowserRouter>
      <Security
        issuer="https://dev-348121.okta.comDashboard/oauth2/default"
        clientId="0oan7ffoa5EpF0ZT14x6"
        redirectUri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
        <div className="App">
          <Navbar />

          <Route path="/" exact={true} component={Home} />
          <SecureRoute path="/staff" exact={true} component={Staff} />
          <Route path='/login' render={() => <Login issuer='https://dev-348121.okta.comDashboard/oauth2/default' />} />
          <Route path="/implicit/callback" component={LoginCallback} />
        </div>
      </Security>
    </BrowserRouter>
  );
}

export default App;
