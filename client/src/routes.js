import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Ranking from './pages/Ranking';
import Classroom from './pages/Classroom';
import Home from './pages/Home';
import Modules from './pages/Modules';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/ranking" exact component={Ranking} />
        <Route path="/classroom" exact component={Classroom} />
        <Route path="/modules" exact component={Modules} />
      </Switch>
    </BrowserRouter>
  );
}
