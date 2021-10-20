import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import Carto_perf from "../components/Carto_perf";
import Newindicateur from "../components/Newindicateur";
import Indicateurs from "../components/Indicateurs";
import Execution from "../components/Execution";
import Newservice_executant from "../components/Newservice_executant";

export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cartographie_performance" exact component={Carto_perf} />
      <Route path="/indicateurs" exact component={Indicateurs} />
      <Route path="/indicateurs/new" exact component={Newindicateur} />
      <Route path="/service_executants/new" exact component={Newservice_executant} />
      <Route path="/indicateur_executions" exact component={Execution} />
    </Switch>
  </Router>
);