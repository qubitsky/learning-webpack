import React, { Suspense, lazy } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

const A = lazy(() => import('./pages/A'));
const B = lazy(() => import('./pages/B'));

function App() {
  return (
    <HashRouter>
      <Suspense fallback="">
        <Switch>
          <Route exact path="/" component={A}></Route>
          <Route exact path="/b" component={B}></Route>
        </Switch>
      </Suspense>
    </HashRouter>
  );
}

export default App;
