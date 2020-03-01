import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { DataStateContext } from './DataStateContext';

function App() {
  console.log(DataStateContext)
  return (
    <DataStateContext>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/page/:page' component={MainPage} />
        </Switch>
      </BrowserRouter>
    </DataStateContext>
  );
}

export default App;
