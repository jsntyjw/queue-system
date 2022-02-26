import React, { useState } from 'react';
import '../App.css';
import { Text, Button, Layout, BoxContainer, Breadcrumb, InputGroup, Accordion, InputSelect, Modal, } from 'react-lifesg-design-system';
import styled from "styled-components";
import Booking from "../models/booking";

import { ModalContent } from "../models/doc-elements";


const StyledContainer = styled(Layout.GridContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "title"
        "button "
        "queue";
    grid-gap: 0.25rem;
    grid-row-gap: 16px;
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
    clicked: string,
    showModal: boolean
}




class Appointment extends React.Component<{}, MyState> {



    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            inputValue: '',
            clicked: 'none',
            showModal: false

        };
        this.searchByLocation = this.searchByLocation.bind(this)
    }

    public async searchByLocation(searchMethod: string) {

        var apiURL: string
        if (searchMethod == "location") {
            apiURL = 'http://localhost:3001/api/booking/location/';
            document.getElementById("outsideCitizenInfoDiv")!!.style.display = "none";

        }
        else {
            apiURL = 'http://localhost:3001/api/booking/citizen/';
            document.getElementById("outsideCitizenInfoDiv")!!.style.display = "block";

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
                        clicked: 'block'
                    });

                });
            });
    }

    render() {


        return (

            <StyledSection>

                    <Modal.Base
                        show={this.state.showModal}
                        animationFrom="bottom"
                        enableOverlayClick={true}
                    // onOverlayClick={closeModal()}
                    >
                        <Modal.Box onClose={() => {

                            this.setState({
                                showModal: false
                            });



                        }}>
                            <ModalContent>
                                <span>Send to queue succesfully</span>
                            </ModalContent>
                        </Modal.Box>
                    </Modal.Base>

                <Layout.Container>



                    <Breadcrumb links={[{ title: 'Home', url: '/Home' }, { title: 'Appointments' }]} />
                    <StyledContainer>
                        <Text.H3>View appointments by NRIC:</Text.H3>
                        <div className="inlinecontent" style={{ justifyItems: "start", }}>
                            <InputGroup addon={{
                                type: 'custom'
                            }} placeholder="Type NRIC here..."
                                onChange={evt => this.updateInputValue(evt)}
                            />
                            <Button.Default onClick={() => this.searchByLocation("NRIC")} >Search</Button.Default>
                        </div>

                        <Text.H3>View appointments by Location: </Text.H3>
                        <div className="inlinecontent" style={{ justifyItems: "start", }}>

                            <InputSelect
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
                                    this.setState({ inputValue: selectedValue }, () => {
                                        this.searchByLocation('location')
                                    });
                                }} />

                        </div>
                        <div className="spacer2"></div>
                        <div id="outsideCitizenInfoDiv" style={{ display: 'none' }}>
                            <BoxContainer title="Citizen Information" collapsible={false} className="textleft" >
                                <div style={{ padding: "2rem", minWidth: "1080px" }}>
                                    <Layout.GridContainer className="column4">
                                        <Text.Body weight="semibold">NRIC</Text.Body>
                                        <Text.Body weight="semibold">Name</Text.Body>
                                        <Text.Body weight="semibold">Phone Number</Text.Body>
                                        <Text.Body weight="semibold">Email</Text.Body>
                                        <Text.Body>{this.state.bookings[0]?.Nric}</Text.Body>
                                        <Text.Body>{this.state.bookings[0]?.CitizenName}</Text.Body>
                                        <Text.Body>{this.state.bookings[0]?.CitizenNumber}</Text.Body>
                                        <Text.Body>{this.state.bookings[0]?.CitizenEmail}</Text.Body>
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
                                {this.state.bookings.map( (input, index) => {
                                    return (
                                        <Accordion.Item title={input.ServiceName} key={index} expanded={false}>
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

                                                <Button.Default
                                                     onClick={() => this.checkPage(this.handle200, input.Id!!, input.Nric, input.CitizenName, input.CitizenEmail, input.CitizenNumber)}
                                                >Send to Queue</Button.Default>
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

     handle200(response) {
        console.log('handle200 has received:', response);
    }
    
     checkPage(callback, bookingId: string, nric: string, citizenName: string, citizenEmail: string, citizenNumber: string) {
        const queueObject = {
            "_id": bookingId,
            "nric": nric,
            "citizenName": citizenName,
            "citizenEmail": citizenEmail,
            "citizenNumber": citizenNumber
        }
    
        const myJSON = encodeURI(JSON.stringify(queueObject));
    
    
        const xhr = new XMLHttpRequest(),
            method = "GET",
            url = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=hospital&bindingKey=doctor&bookingDetails=" + myJSON;
        // initialize a new GET request
        xhr.open(method, url, true);
    
        // respond to every readyState change
        xhr.onreadystatechange = () => {
    
            // ignore all readyStates other than "DONE"
            if (xhr.readyState !== XMLHttpRequest.DONE) { return; }
    
            // call the callback with status
            if (xhr.status === 200) {
                this.setState({
                    showModal: true
                });
                return callback(xhr.status);
            }
    
            // got something other than 200,
            // re-initialize and send another GET request
            xhr.open(method, url, true);
            xhr.send();
        }
    
        // send the initial GET request
        xhr.send();
    }

    updateInputValue(evt) {
        const val = evt.target.value;
        this.setState({
            inputValue: val
        });
    }
}

export default Appointment;






// function closeModalFn(): (() => void) | undefined {
//     throw new Error('Function not implemented.');
// }
// const [show, setShow ] = useState(false)
// function closeModal(): (() => void) | undefined {
//     document.getElementById("divModal")!!.style.display = "none";
//     throw new Error('Function not implemented.');
// }
// call checkPage once

