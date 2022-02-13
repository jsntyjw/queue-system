import * as React from "react";
import * as ReactDOM from "react-dom";
import * as style from "./components/Home.module.css";
import AppContent from "./components/AppContent";

import LeftNavbar from "./components/LeftNavbar";
import Header from "./components/Header";
import DashboardContent from "./components/DashboardContent";
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <div className={style.container}>
      <title>Appointments</title>
      <link rel="icon" href="/favicon.ico" />

      <h1>Dashboard</h1>
      <LeftNavbar />
      <Header />

      <Route path="/appcontent" component={AppContent} />
      <Route path="/dashboard" component={DashboardContent} />
    </div>
  </BrowserRouter>,
  document.getElementById("app")
);
