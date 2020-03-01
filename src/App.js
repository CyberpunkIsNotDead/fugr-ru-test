import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { DataContextWrapper } from './DataContextWrapper';

function App() {
  return (
    <DataContextWrapper>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/page/:page' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </DataContextWrapper>
  );
}

export default App;
