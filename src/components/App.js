import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/AboutPage";
import QuantilopeQuestionaire from "./quantilope/QuantilopeQuestionaire";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={QuantilopeQuestionaire} />
        <Route path="/Quantilope" component={QuantilopeQuestionaire} />
        <Route path="/About" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
