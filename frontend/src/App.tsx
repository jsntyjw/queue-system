import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import './App.css';
import './index.css';
import 'toastr/build/toastr.min.css';
import Index from './components/index.component';
import Edit from './components/UpdateBooking';
import Create from './components/CreateNewBooking';
import Home from './components/Home'
import Appointments from './components/Appointments'
import UpcomingAppointments from './components/UpcomingAppointments'
import ServiceCounter  from './components/ServiceCounter'
import Dashboard from './components/Dashboard';
import ScanIC from './components/scanic.component'
import BookingFound from './components/bookingfound.component';
/** App.tsx **/


// import React from "react";
import {  Footer, Breadcrumb } from "react-lifesg-design-system";




import { Navbar } from 'react-lifesg-design-system'
import { INavbarItems } from 'react-lifesg-design-system/components/navbar/types';
import ViewAllBookings from './components/ViewAllBookings';

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
        {
            id: "servicecounter",
            children: "ServiceCounter",
            href: "http://localhost:3000/ServiceCounter"
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
                    <Route path='/UpcomingAppointments' component={ UpcomingAppointments } />
                    <Route path='/Dashboard' component={ Dashboard } />
                    <Route path='/ServiceCounter' component={ ServiceCounter } />
                    <Route path='/ScanIC' component={ ScanIC } />
                    <Route path='/BookingFound' component={ BookingFound } />
                    <Route path='/ViewAllBookings' component = {ViewAllBookings} />
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



