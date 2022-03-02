import * as React from 'react';
import {  Route, Link, Switch, useHistory, BrowserRouter, withRouter } from "react-router-dom";

import './App.css';
import './index.css';
import 'toastr/build/toastr.min.css';
import Index from './components/index.component';
import Edit from './components/UpdateBooking';
import Create from './components/CreateNewBooking';
import Home from './components/Home'
import Appointments from './components/Appointments'
import UpcomingAppointments from './components/UpcomingAppointments'
import ServiceCounter from './components/ServiceCounter'
import Dashboard from './components/Dashboard';
import ScanIC from './components/scanic.component'
import BookingFound from './components/bookingfound.component';
/** App.tsx **/


// import React from "react";
import { Footer, Breadcrumb, Button, AlertBox, Text } from "react-lifesg-design-system";

// require('dotenv').config();



import { Navbar } from 'react-lifesg-design-system'
import { INavbarItems } from 'react-lifesg-design-system/components/navbar/types';
import ViewAllBookings from './components/ViewAllBookings';
import { ButtonSave } from './common/components/form';
import Login from './components/Login';

interface CustomType {
    isExternal?: boolean;
}

const items: INavbarItems<CustomType> = {
    desktop: [
        {
            id: "home",
            children: "Home",
            href: process.env.REACT_APP_MY_EC2_ADDRESS + "Home"
        },
        {
            id: "appointments",
            children: "Appointments",
            href: process.env.REACT_APP_MY_EC2_ADDRESS + "Appointments",
            options: {
                isExternal: true,
            },
        },
        {
            id: "dashboard",
            children: "Dashboard",
            href: process.env.REACT_APP_MY_EC2_ADDRESS + "Dashboard"
        },
        {
            id: "servicecounter",
            children: "ServiceCounter",
            href: process.env.REACT_APP_MY_EC2_ADDRESS + "ServiceCounter"
        },

    ],
};

const App = () => {

    // const history = useHistory();

    if (sessionStorage.getItem('data') == null) {
        return (
            <div>
                <Login />

            </div>
        )
    }

    // history.push(`/dashboard`);
    var sessionResult = sessionStorage.getItem('data') || '{}'
    var obj = JSON.parse(sessionResult);
    console.log(obj)

    var name = obj.NRIC
    // console.log(sessionResult)
    return (
        <div>



            <div style={{ height: "150px" }}>
                {/* <AlertBox.Base type="success">
    This will serves as a acknowledgement of a successful action.
  </AlertBox.Base> */}
                <div id='divNavBar' style={{ height: "150px", margin: "20px", display:"block" }}>
                    <Navbar items={items} />

                </div>
                <div style={{ marginLeft: '40px' }}>
                    <Text.H3> Welcome, {name}</Text.H3>
                    <Text.Hyperlink.Default href={process.env.REACT_APP_MY_EC2_ADDRESS + "Login"} onClick={
                        () => {
                            sessionStorage.removeItem('data')
                            return(
                                <div>
                                 <Login />

                                </div>
                            )
                        }
                    } target="blank">Logout</Text.Hyperlink.Default>

                </div>

            </div>


            <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/edit/:id' component={Edit} />
                        <Route path='/index' component={Index} />
                        <Route path='/Home' component={Home} />
                        <Route path='/Create' component={Create} />

                        <Route path='/Appointments' component={Appointments} />
                        <Route path='/UpcomingAppointments' component={UpcomingAppointments} />
                        <Route path='/Dashboard' component={Dashboard} />
                        <Route path='/ServiceCounter' component={ServiceCounter} />
                        <Route path='/ScanIC' component={ScanIC} />
                        <Route path='/BookingFound' component={BookingFound} />
                        <Route path='/ViewAllBookings' component={ViewAllBookings} />
                    </Switch>
            </div>



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




export default withRouter(App)



