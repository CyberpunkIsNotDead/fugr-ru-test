import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
// import { DataTableContext } from './DataStateContext';

function App() {
  return (
    // <DataTableContext.Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/page/:page' component={MainPage} />
        </Switch>
      </BrowserRouter>
    // </DataTableContext.Provider>
  );
}

export default App;
