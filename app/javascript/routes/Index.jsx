import React from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "../components/Maps/Home";
import Carto_perf from "../components/Maps/Carto_perf";
import Newindicateur from "../components/Indicateurs/Newindicateur";
import Execution from "../components/Execution/Execution";
import Newservice_executant from "../components/Services_Executants/Newservice_executant";
import Ministere from "../components/Services_Executants/Ministere";
import Newindicateur_execution from "../components/Execution/Newindicateur_execution";


export default (
  <BrowserRouter>

    <Routes>
      <Route path="/" element={<Navigate to="/cartographie_performance" replace />} />
      <Route path="/cartographie_performance" element={<Home/>} />
      <Route path="/cartographie_indicateur" element={<Carto_perf/>} /> 
      <Route path="/indicateurs/new" element={<Newindicateur/>} />
      <Route path="/service_executants/new" element={<Newservice_executant/>} />
      <Route path="/ministeres" element={<Ministere/>} />
      <Route path="/indicateur_executions/new" element={<Newindicateur_execution/>} />
      <Route path="/indicateur_executions" element={<Execution/>} />
      
    </Routes>

  </BrowserRouter>
);