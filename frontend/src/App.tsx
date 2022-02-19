import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'toastr/build/toastr.min.css';
import Index from './components/index.component';
import Edit from './components/edit.component';
import Create from './components/create.component';
import Home from './components/home.component';
import Appointments from './components/appointments.component';
import Dashboard from './components/dashboard.component';
/** App.tsx **/


// import React from "react";
import { ThemeProvider } from "styled-components";
import { BaseTheme, Footer, Breadcrumb } from "react-lifesg-design-system";




import { Navbar } from 'react-lifesg-design-system'
import { INavbarItems } from 'react-lifesg-design-system/components/navbar/types';

interface CustomType {
    isExternal?: boolean;
}

const items: INavbarItems<CustomType> = {
    desktop: [
        {
            id: "home",
            children: "Home",
            href: "http://localhost:3000/Home"
        },
        {
            id: "appointments",
            children: "Appointments",
            href: "http://localhost:3000/Appointments",
            options: {
                isExternal: true,
            },
        },
        {
            id: "dashboard",
            children: "Dashboard",
            href: "http://localhost:3000/Dashboard"
        },


    ],
};

const App = () => {
    return (
        <div>
            <div>
              <Navbar items={items} />
            </div>

          
            <Breadcrumb links={[{ title: 'Home', url: 'https://www.google.com' }, { title: 'Breadcrumb without url' }, { title: 'Normal breadcrumb', url: 'https://www.google.com' }, {
                onClick: () => { },
                title: 'Breadcrumb with a callback function',
                url: 'https://www.google.com'
            },
            {
                title: 'Last breadcrumb (unclickable)',
                url: 'https://www.google.com'
            }
            ]}
            />  
            
            <Router>
                <Switch>
                    <Route exact path='/create' component={Create} />
                    <Route path='/edit/:id' component={Edit} />
                    <Route path='/index' component={Index} />
                    <Route path='/Home' component={Home} />
                    <Route path='/Appointments' component={ Appointments } />
                    <Route path='/Dashboard' component={ Dashboard } />
                </Switch>
            </Router>

                  <div>
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
                  </div>
            

        </div>
        
    );
};




export default App



