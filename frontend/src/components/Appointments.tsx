import React, { useState } from 'react';
import '../App.css';
import { Text, Form, Button, Layout, BoxContainer, LinkList, Breadcrumb, Icon, InputGroup, Accordion } from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Booking from "../models/booking";
import { render } from 'react-dom';



interface Props {
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}




const StyledContainer = styled(Layout.GridContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "title"
        "button "
        "queue";
    grid-gap: 0.25rem;
    grid-row-gap: 16px;
    padding: 0 25px;
`;

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

const Main = styled.main`
  color: white;
  grid-area: queue;
  padding: 0.25rem;
`;

interface MyState {
    bookings: Booking[],
    inputValue: string,
    clicked: string
}




class Appointment extends React.Component<{}, MyState> {

    constructor(props) {
        super(props);

        this.state = {
            bookings: [],
            inputValue: '',
            clicked: 'none'
            // booking: Booking

        };

        this.searchByLocation = this.searchByLocation.bind(this)

    }


    public async searchByLocation(searchMethod: string) {
        let data = ''

        const newSubElement = document.getElementsByTagName("Accordion.Base")[0]
        var apiURL : string
        if(searchMethod == "location"){
            apiURL = 'http://localhost:3001/api/booking/location/';
        }
        else{
            apiURL = 'http://localhost:3001/api/booking/citizen/';
        }

        fetch(apiURL + this.state.inputValue)
            .then(function (response) {
                return response.json();

            })

            .then((myJson) => {
                myJson.data.forEach(element => {
                    var eachBooking = new Booking(
                        element["_id"],
                        element["nric"],
                        element["citizenName"],
                        element["citizenSalutation"],
                        element["citizenEmail"],
                        element["citizenNumber"],
                        element["serviceName"],
                        element["serviceProviderName"],
                        element["serviceProviderEmail"],
                        element["serviceProviderPhone"],
                        element["serviceStartDate"],
                        element["serviceStartTime"],
                        element["serviceProviderLocation"],
                        element["bookingStatus"]
                    );

                    this.state.bookings.length = 0

                    const bookings = this.state.bookings.slice(0);
                    bookings.push(eachBooking)

                    this.setState({
                        bookings: bookings,
                        clicked : 'block'
                    });

                    document.getElementById("outsideCitizenInfoDiv")!!.style.display = "block";



                })
                    ;
            });
    }

    render() {

        return (


            <StyledSection>
                <Layout.Container>
                    <Breadcrumb links={[{ title: 'Home', url: '/Home' }, { title: 'Appointments' }]} />

                    <StyledContainer>
                    <Text.H3>View appointments by NRIC:</Text.H3>
                        <div className="inlinecontent" style={{ justifyItems: "start", }}>
                            
                            <InputGroup addon={{
                                // children: <Icon type="search" />,
                                type: 'custom'
                            }} placeholder="Type NRIC here..."
                                onChange={evt => this.updateInputValue(evt)}

                            />


                            <Button.Default onClick={() =>this.searchByLocation("NRIC")} >Search</Button.Default>
                        </div>

                    <Text.H3>View appointments by Location: </Text.H3>
                    <div className="inlinecontent" style={{ justifyItems: "start", }}>
                        
                    <Form.Select
                        label="Service Provider Location"
                        placeholder="Select"

                        options={[
                            { value: "Tampines", label: "Tampines" },
                            { value: "Woodlands", label: "Woodlands" },
                            { value: "Toa Payoh", label: "Toa Payoh" },
                            { value: "Punggol", label: "Punggol" },


                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectItem={(item, selectedValue) => {
                            this.setState({
                                inputValue: selectedValue
                            });                            
                            this.searchByLocation('location')
                            // find = value
                            console.log(this.state.inputValue)
                        }}
                    />


                       
                    </div>
                        <div className="spacer2"></div>
                        <div id="outsideCitizenInfoDiv" style={{ display : 'none'}}>
                        <BoxContainer title="Citizen Information" collapsible={false}  className="textleft" >
                            <div style={{ padding: "2rem", minWidth: "1080px"}}>
                                <Layout.GridContainer className="column4">
                                    <Text.Body weight="semibold">NRIC</Text.Body>
                                    <Text.Body weight="semibold">Name</Text.Body>
                                    <Text.Body weight="semibold">Phone Number</Text.Body>
                                    <Text.Body weight="semibold">Email</Text.Body>
                                    <Text.Body>{this.state.bookings[0]?.Nric}</Text.Body> {/* Service Provider  */}
                                    <Text.Body>{this.state.bookings[0]?.CitizenName}</Text.Body> {/* Service Name  */}
                                    <Text.Body>{this.state.bookings[0]?.CitizenNumber}</Text.Body> {/* Phone */}
                                    <Text.Body>{this.state.bookings[0]?.CitizenEmail}</Text.Body> {/* Email  */}
                                </Layout.GridContainer>
                            </div>
                        </BoxContainer>
                        </div>
                        
                    </StyledContainer>
                    <div className="spacer5"></div>
                    <StyledContainer>
                        <Text.H3>Appointments</Text.H3>
                        <Text.Body>Government services appointments</Text.Body>
                        <Main>


                            <Accordion.Base className='base' >
                                {this.state.bookings.map(function (input, index) {
                                    return (
                                        <Accordion.Item title={input.CitizenName} key={index} expanded={false}>
                                            <Text.Body>
                                                <ul>
                                                    <li>
                                                        <b>Citizen Name :</b>  {input.CitizenName}
                                                    </li>
                                                    <li>
                                                        <b>Citizen Number: </b> {input.CitizenNumber}
                                                    </li>
                                                    <li>
                                                        <b>Citizen Email: </b> {input.CitizenEmail}
                                                    </li>
                                                    <li>
                                                        <b>Service start date:</b>  {input.ServiceStartDate}
                                                    </li>
                                                    <li>
                                                        <b>Service start time:</b>  {input.ServiceStartTime}
                                                    </li>
                                                    <li>
                                                        <b>Service Name:</b>  {input.ServiceName}
                                                    </li>
                                                    <li>
                                                        <b>Service Provider Location:</b>  {input.ServiceProviderLocation}
                                                    </li>
                                                </ul>
                                            </Text.Body>
                                        </Accordion.Item>
                                    )
                                })}
                            </Accordion.Base>

                        </Main>

                        <div className="spacer3"></div>

                    </StyledContainer>
                </Layout.Container>
            </StyledSection>

        )
    }

    updateInputValue(evt) {
        const val = evt.target.value;
        // ...
        this.setState({
            inputValue: val
        });
    }
}

export default Appointment;

function componentDidMount() {
    throw new Error('Function not implemented.');
}
