import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Page1 } from './pages/page1';
import { Page2 } from './pages/page2';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Page1} exact={true} />
      </Switch>
      <Switch>
        <Route path="/page2" component={Page2} exact={true} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
