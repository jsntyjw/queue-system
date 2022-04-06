import * as React from 'react';
import { Route, Switch,withRouter } from "react-router-dom";

import './App.css';
import './index.css';
import 'toastr/build/toastr.min.css';
import Create from './components/CreateNewBooking';
import Home from './components/Home'
import Appointments from './components/Appointments'
import ServiceCounter from './components/ServiceCounter'
import Dashboard from './components/Dashboard';


import { Footer, Layout } from "react-lifesg-design-system";

import { Navbar } from 'react-lifesg-design-system'
import { INavbarItems } from 'react-lifesg-design-system/components/navbar/types';

interface CustomType {
    isExternal?: boolean;
}


console.log(sessionStorage.getItem('data'))


const App = () => {

    var items: INavbarItems<CustomType> = {


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
                children: "Service Counter",
                href: process.env.REACT_APP_MY_EC2_ADDRESS + "ServiceCounter"
            },

        ],
    };

    return (
        <>
            <Layout.Container>
                <div>
                    <div style={{ height: "50px", marginBottom: "80px" }}>

                        <div id='divNavBar' style={{ height: "150px", margin: "20px", display: "block" }}>
                            <Navbar items={items} />

                        </div>


                    </div>


                    <div>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/Home' component={Home} />
                            <Route path='/Create' component={Create} />
                            <Route path='/Appointments' component={Appointments} />
                            <Route path='/Dashboard' component={Dashboard} />
                            <Route path='/ServiceCounter' component={ServiceCounter} />
                        </Switch>
                    </div>





                </div>
            </Layout.Container>

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
        </>
    );
};




export default withRouter(App)



