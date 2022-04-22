import React from "react";
import { Routes as Switch, Route } from "react-router-dom";
import Instagram from "./components/Instagram";
import Themesetting from "./components/Themesetting";
import General from "./components/General";
function Routes() {
  return (
        <Switch>
            <Route path="/" element={<General />} />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/themesetting" element={<Themesetting />} />
        </Switch>
    );
}

export default Routes;