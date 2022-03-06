import * as React from 'react';
import { BrowserRouter as Router, Route, Link, Switch, useHistory, Redirect, BrowserRouter, withRouter } from "react-router-dom";
import { Button, Text, MasonryTileGridContainer, MasonryTile, ImageSelector, Banner, RadioButton, InputGroup, Form, InputSelect, Masthead, Footer } from "react-lifesg-design-system"
import { Container, OptionContainer, Label } from '../models/doc-elements';
import { ButtonSave } from '../common/components/form';



import { useSessionStorage } from '../service/useSessionStorage';
import App from '../App';
import Home from './Home';

require('dotenv').config();

interface IProps {
    // history: any
    // name: string

}
interface IState {
    url: string,
    selected: string,
    userDivShow: string,
    adminShow: string,
    userName: string,
    data: string[],
    whoLoggedin: string,
    redirect: boolean,
    role: string,
    citizenLogin: string,
    adminLogin: string
    // redirect_address: string
    // history: any
}


// const history = useHistory();



class Login extends React.Component<IProps, IState> {
    // const configValue: string = (process.env.MY_EC2_ADDRESS as string);
    // routeChange=()=> {

    //   }

    // history = useHistory();




    constructor(props) {
        super(props);
        this.state = {
            url: process.env.MY_EC2_ADDRESS as string,
            selected: 'A',
            userDivShow: 'block',
            adminShow: 'none',
            userName: '',
            role: 'citizen',
            data: [],
            whoLoggedin: '',
            redirect: false,
            citizenLogin: 'block',
            adminLogin: 'none'
            // redirect_address: ''
        }
        // let history = useHistory();

        // const redirect = () => {
        // }
    }


    public render(): React.ReactNode {


        if (this.state.redirect) {

            return (
                <div>
                    <Redirect to="/Home" />

                </div>


            )

        }

        //     return (

        //         <div>
        //              <BrowserRouter>
        //             <Redirect to={this.state.redirect_address} />
        //             <App />


        //         <Router>
        //             <Switch>

        //                 <Route path='/Home' component={Home} />

        //             </Switch>
        //         </Router>

        //         </BrowserRouter>
        //         </div>



        //     )
        // }
        return (

            <div>
                <BrowserRouter>


                    <Masthead />

                    <Banner imgset={{
                        desktop: 'https://www.life.gov.sg/img/what-you-can-do/government-services/hero-banner.jpg',
                        foreground: 'https://www.life.gov.sg/img/what-you-can-do/government-services/hero-banner-phone.png',
                        mobile: 'https://www.life.gov.sg/img/what-you-can-do/government-services/hero-banner.jpg'
                    }}>
                        <React.Fragment key=".0">
                            Welcome to LifeSG Appointment <br></br>&  Queue Management System
                        </React.Fragment>
                    </Banner>

                    <br />
                    <br />


                    <div style={{ margin: "auto", width: "300px", alignContent: "center" }}>
                        <Text.H3>Login Type:</Text.H3>
                    </div>

                    <br></br>

                    <div style={{ margin: "auto", width: "300px", alignContent: "center" }}>
                        <Container>

                            <OptionContainer>

                                <RadioButton value="A" id="multiple-options-a" name="multiple-options" onChange={() => {
                                    this.setState({
                                        selected: 'A',
                                        userDivShow: 'block',
                                        adminShow: 'none',
                                        role: 'citizen',
                                        citizenLogin: 'block',
                                        adminLogin: 'none'
                                    }


                                    );
                                }} checked={this.state.selected === "A"} />
                                <Label htmlFor="multiple-options-a">I'm an user</Label>
                            </OptionContainer>
                            <OptionContainer>
                                <RadioButton value="B" id="multiple-options-b" name="multiple-options" onChange={() => {
                                    this.setState({
                                        selected: 'B',
                                        userDivShow: 'none',
                                        'adminShow': 'block',
                                        role: 'admin',
                                        citizenLogin: 'none',
                                        adminLogin: 'block'
                                    });
                                }} checked={this.state.selected === "B"} />
                                <Label htmlFor="multiple-options-b">I'm an admin</Label>
                            </OptionContainer>
                        </Container>




                    </div>



                    <div style={{ margin: "auto", width: "300px", marginTop: "30px", display: this.state.userDivShow }}>

                        <Form.Field
                            label={{
                                text: "NRIC",
                                addon: {
                                    content: "Please enter your NRIC / FIN number"
                                }
                            }}
                            placeholder="Enter NRIC / FIN"
                            onChange={evt => this.updateInputValue(evt)}

                        />
                        {/* <Form.DateInput label="NRIC Issue Date"
                            onChange={(value) => {
                                // console.log(value)
                                // props.booking.ServiceStartDate = value
                                this.setState({
                                    dateOfIssue: value
                                })

                            }
                            }
                        /> */}

                        <div id='citizenLoginButton' style={{ display: this.state.citizenLogin }}>
                            <ButtonSave
                                className="btn btn-success mt-2"
                                onClick={() => {
                                    // console.log("test!!!!!!!")
                                    this.setState({
                                        data: [`{"Role": "${this.state.role}","userName": "${this.state.userName}"}`],
                                        whoLoggedin: 'user',
                                        redirect: true,
                                        // redirect_address: '/home'

                                    }, () => {
                                        sessionStorage.setItem('data', this.state.data.toString())
                                    }

                                    )

                                    console.log(this.state.whoLoggedin)


                                }} label={'Login'}

                            ></ButtonSave>
                        </div>

                        {/* <div id='adminLoginButton' style={{display: this.state.adminLogin}}>
                        <button
                            // className="btn btn-success mt-2"
                            onClick={() => {
                                console.log("Test")
                                // this.setState({
                                //     data: [`{"Role": "${this.state.role}","userName": "admin"}`],
                                //     whoLoggedin: 'user',
                                //     redirect: true,
                                //     // redirect_address: '/home'

                                // }, () => {
                                //     sessionStorage.setItem('data', this.state.data.toString())
                                // }

                                // )

                                // console.log(this.state.whoLoggedin)


                            }}

                        ></button>
                        </div> */}







                    </div>


                    <div style={{ margin: "auto", width: "300px", marginTop: "30px", display: this.state.adminShow }}>

                        <Form.Select
                            label="Organization"
                            placeholder="Select your organization"
                            options={[
                                { value: "nationalPolyclinic", label: "National Polyclinic" }

                            ]}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                            onSelectItem={(item, extractedValue) => {

                            }}
                        />
                        <Form.Field
                            label={{
                                text: "Admin password",
                                addon: {
                                    content: "Please enter your organization's admin password"
                                }
                            }}
                        />

                        <ButtonSave
                            className="btn btn-success mt-2"
                            onClick={() => {
                                // console.log("test!!!!!!!")
                                this.setState({
                                    data: [`{"Role": "${this.state.role}","userName": "admin"}`],
                                    whoLoggedin: 'user',
                                    redirect: true,
                                    // redirect_address: '/home'

                                }, () => {
                                    sessionStorage.setItem('data', this.state.data.toString())
                                }

                                )

                                console.log(this.state.whoLoggedin)


                            }} label={'Login'}

                        ></ButtonSave>


                    </div>

                    <br />

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




                </BrowserRouter>


            </div>



        )

    }


    updateInputValue(evt) {
        const val = evt.target.value;
        this.setState({
            userName: val,
        });
    }



}


export default Login;