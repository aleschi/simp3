import React from "react";
import { BrowserRouter as Router, Routes, Route, Switch, Redirect} from "react-router-dom";
import Home from "../components/Maps/Home";
import Carto_perf from "../components/Maps/Carto_perf";
import Newindicateur from "../components/Indicateurs/Newindicateur";
import Execution from "../components/Execution/Execution";
import Newservice_executant from "../components/Services_Executants/Newservice_executant";
import Ministere from "../components/Services_Executants/Ministere";
import Newindicateur_execution from "../components/Execution/Newindicateur_execution";


export default (
  <Router>
    <Switch>
      <Route path="/" exact component={Home}><Redirect to="/cartographie_performance" /></Route>
      <Route path="/cartographie_performance" exact component={Home} />
      <Route path="/cartographie_indicateur" exact component={Carto_perf} /> 
      <Route path="/indicateurs/new" exact component={Newindicateur} />
      <Route path="/service_executants/new" exact component={Newservice_executant} />
      <Route path="/ministeres" exact component={Ministere} />
      <Route path="/indicateur_executions/new" exact component={Newindicateur_execution} />
      <Route path="/indicateur_executions" exact component={Execution} />
      
    </Switch>
  </Router>
);