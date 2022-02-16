import * as React from 'react'; 
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
 
import './App.css'; 
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'toastr/build/toastr.min.css'; 
import Index from './components/index.component';
import Edit from './components/edit.component';
import Create from './components/create.component';
import Home from './components/home.component';
import AppContent from './components/AppContent';


/** App.tsx **/


// import React from "react";
import { ThemeProvider } from "styled-components";
import { BaseTheme, Footer } from "react-lifesg-design-system";




import {Navbar} from 'react-lifesg-design-system'
import { INavbarItems } from 'react-lifesg-design-system/components/navbar/types';

interface CustomType {
    isExternal?: boolean;
}

const items: INavbarItems<CustomType> = {
    desktop: [
        {
            id: "home",
            children: "Home",
            href: "https://www.life.gov.sg",
            target: "_blank",
        },
        {
            id: "services",
            children: "Services",
            href: "https://www.life.gov.sg",
            options: {
                isExternal: true,
            },
        },
        {
            id: "guides",
            children: "Guides",
            href: "https://www.life.gov.sg",
        },
        {
            id: "lifesg-app",
            children: "LifeSG app",
            href: "https://www.life.gov.sg",
        },
        {
            id: "manage-booking",
            children: "Manage Booking",
            href: "http://localhost:3000/manage-booking",
        },
        {
            id: "blog",
            children: "Blog",
            href: "https://www.life.gov.sg/blog",
            options: {
                isExternal: true,
            },
        },
    ],
};

const App = () => {
    return (
            <ThemeProvider theme={BaseTheme}>
                <Navbar items={items} />
           
        
        <Router>
            <Switch>
                  <Route exact path='/create' component={ Create } />
                  <Route path='/edit/:id' component={ Edit } />
                  <Route path='/index' component={ Index } />
                  <Route path='/manage-booking' component={ Home } />
              </Switch>
        </Router>

        <Footer
    lastUpdated={new Date()}
    addon="download"
    links={[
        [
            { children: "Home", href: "https://www.life.gov.sg" },
            {
                children: "How it works",
                href: "https://www.life.gov.sg/#how-it-works",
            },
            {
                children: "Ways we help",
                href: "https://www.life.gov.sg/#ways-we-help",
            },
            {
                children: "Campaigns",
                href: "https://www.life.gov.sg/#campaigns",
            },
            {
                children: "News and media",
                href: "https://www.life.gov.sg/#newsandmedia",
            },
        ],
        [
            {
                children: "About us",
                href: "https://www.life.gov.sg/about-us",
            },
            {
                children: "Help & Support",
                href: "https://www.life.gov.sg/help-support",
            },
            {
                children: "Get in touch with us",
                href: "https://www.life.gov.sg/get-in-touch",
            },
        ],
    ]}
/>
        </ThemeProvider>  
    );
};

       
    //   <Router>
    //       <div className="container">
      

          
    //           <nav className="navbar navbar-expand-lg navbar-light bg-light">
    //               <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //                   <ul className="navbar-nav mr-auto">
    //                       <li className="nav-item">
    //                           <Link to={'/'} className="nav-link">Home</Link>
    //                       </li>
    //                       <li className="nav-item">
    //                           <Link to={'/create'} className="nav-link">Create</Link>
    //                       </li>
    //                       <li className="nav-item">
    //                           <Link to={'/index'} className="nav-link">Index</Link>
    //                       </li>
    //                   </ul>
    //               </div>
    //           </nav> <br/>
         
    //           <Switch>
    //               <Route exact path='/create' component={ Create } />
    //               <Route path='/edit/:id' component={ Edit } />
    //               <Route path='/index' component={ Index } />
    //               <Route path='/' component={ Home } />
    //           </Switch>
    //       </div>
    //   </Router>


export default App


/** SomePage.tsx **/


