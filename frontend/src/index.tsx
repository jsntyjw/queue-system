// import * as React from "react";
// import * as ReactDOM from "react-dom";
// import * as style from "./components/Home.module.css";
// import AppContent from "./components/AppContent";

// import LeftNavbar from "./components/LeftNavbar";
// import Header from "./components/Header";
// // import CsvTest from "./components/CsvTest";
// import DashboardContent from "./components/DashboardContent";
// import { BrowserRouter, Route } from "react-router-dom";


// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';



// ReactDOM.render(
//   <BrowserRouter>
//     <div className={style.container}>
//       <title>Appointments</title>
//       <link rel="icon" href="/favicon.ico" />

//       <h1>Dashboard</h1>
//       <App />
//       <LeftNavbar />
//       <Header />
      

//       <Route path="/appcontent" component={AppContent} />
//       <Route path="/dashboard" component={DashboardContent} />
//     </div>
//   </BrowserRouter>,
//   document.getElementById("app")
// );

// serviceWorker.unregister();
import React from 'react';
import ReactDOM from 'react-dom';
import * as toastr from 'toastr'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<App />


, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
