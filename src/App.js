import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { DataContextWrapper } from './Context/DataContextWrapper';
import { DataFilterContextWrapper } from './Context/DataFilterContextWrapper';

function App() {
  return (
    <DataContextWrapper>
      <DataFilterContextWrapper>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/page/:page' component={MainPage} />
          </Switch>
        </BrowserRouter>
      </DataFilterContextWrapper>
    </DataContextWrapper>
  );
}

export default App;
