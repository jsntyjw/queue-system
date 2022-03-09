import React, { useState } from 'react';
import '../App.css';
import { Text, Button, Layout, BoxContainer, Breadcrumb, InputGroup, Accordion, InputSelect, Modal, RadioButton, } from 'react-lifesg-design-system';
import styled from "styled-components";
import Booking from "../models/booking";

import { Container, Label, ModalContent, OptionContainer } from "../models/doc-elements";
import BaseService from '../service/base.service';


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
    showModal: boolean,
    showNRIC: string,
    showLocation: string,
    selected: string
}

var queueNumberArray : number[] = [];





class Appointment extends React.Component<{}, MyState> {

    

    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            inputValue: '',
            clicked: 'none',
            showModal: false,
            showNRIC: 'block',
            showLocation: 'none',
            selected: 'A'

        };
        this.searchByLocation = this.searchByLocation.bind(this)
    }


    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 10000);
      }

      async loadData() {
        try {
         this.searchByLocation("location");

        //   console.log(blocks.data)
        } catch (e) {
          console.log(e);
        }
      }

    public async searchByLocation(searchMethod: string) {

        var apiURL: string
        if (searchMethod == "location") {
            apiURL = process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking/location/Tampines';
            document.getElementById("divAppointments")!!.style.display = "block";

        }
        else {
            apiURL = process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking/citizen/' + this.state.inputValue;
            console.log(apiURL)
            if(this.state.inputValue == ''){
                apiURL = process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking/location/Tampines';
            }
            // document.getElementById("divAppointments")!!.style.display = "block";

        }

        fetch(apiURL)
            .then(function (response) {
                
                return response.json();
            })
            .then((myJson) => {
                this.state.bookings.length = 0;
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
                        element["bookingStatus"],
                        element["queueNumber"]
                    );

                    
                    // const bookings = this.state.bookings.slice(0);
                    this.state.bookings.push(eachBooking)

                    
                    // console.log(bookings)

                    this.setState({
                        bookings: this.state.bookings,
                        clicked: 'block'
                    });

                });
            });
    }

    render() {


        return (

            <div>



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

                        {/* <Container>
                            <OptionContainer>
                                <RadioButton value="A" id="multiple-options-a" name="multiple-options" onChange={() => {
                                    this.setState({
                                        selected: 'A',
                                        showNRIC: 'block',
                                        showLocation: 'none'
                                    }

                                    );
                                }} checked={this.state.selected === "A"} />
                                <Label htmlFor="multiple-options-a">View appointments by NRIC</Label>
                            </OptionContainer>
                            <OptionContainer>
                                <RadioButton value="B" id="multiple-options-b" name="multiple-options" onChange={() => {
                                    this.setState({
                                        selected: 'B',
                                        showLocation: 'block',
                                        showNRIC: 'none'
                                    });
                                }} checked={this.state.selected === "B"} />
                                <Label htmlFor="multiple-options-b">View appointments by Location</Label>
                            </OptionContainer>
                        </Container> */}

                        {/* <div className="spacer2"></div> */}

                        <div id='divNRIC' style={{ justifyItems: "start", maxWidth: '400px', display: this.state.showNRIC }}>
                            <div style={{'margin' : '5px'}}>
                            <Text.Body >Search by NRIC: </Text.Body>
                            </div>
                            <InputGroup addon={{
                                type: 'custom'
                            }} placeholder="Type NRIC here..."
                                
                                onChange={evt => this.updateInputValue(evt)}
                            />

                            <div style={{'padding' : '5px'}}></div>
                            <Button.Default onClick={() => this.searchByLocation("NRIC")} >Search</Button.Default>
                        </div>

                        {/* <div id='divLocation' className="inlinecontent" style={{ justifyItems: "start",maxWidth: '400px', display: this.state.showLocation }}>
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
                                placeholder="Select a location"
                                onSelectItem={(item, selectedValue) => {
                                    this.setState({ inputValue: selectedValue }, () => {
                                        this.searchByLocation('location')
                                    });
                                }} />

                        </div>
                        <div className="spacer2"></div> */}
                        {/* <div id="outsideCitizenInfoDiv" style={{ display: 'none' }}>
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
                        </div> */}

                        <div className="spacer5"></div>

                        <div id='divAppointments' >

                        {/* <div id='divLocation' className="inlinecontent" style={{ justifyItems: "start",maxWidth: '400px', alignContent:'right', display: this.state.showLocation }}>
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
                                placeholder="Select a location"
                                onSelectItem={(item, selectedValue) => {
                                    this.setState({ inputValue: selectedValue }, () => {
                                        this.searchByLocation('location')
                                    });
                                }} />

                        </div> */}
                        <StyledContainer>
                            <Text.H3>Appointments for Tampines</Text.H3>
                            <Text.Body>Government services appointments</Text.Body>
                            <Main>

                           


                                <Accordion.Base className='base' >
                                    {this.state.bookings.map((input, index) => {
                                        var showButton = 'none';
                                        if(input.BookingStatus == 'New'){
                                            showButton = 'block';
                                        }
                                        console.log(this.state.bookings)
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
                                                        <li>
                                                            <b>Service Status:</b>  {input.BookingStatus}
                                                        </li>
                                                    </ul>
                                                    <div style={{ 'display':  showButton }}>
                                                    <Button.Default
                                                        onClick={() => this.checkPage(this.handle200, input.Id!!, input.Nric, input.CitizenName, input.CitizenEmail, input.CitizenNumber, input)}
                                                    >Send to Queue</Button.Default>
                                                    </div>
                                                    
                                                </Text.Body>
                                            </Accordion.Item>
                                        )
                                    })}
                                </Accordion.Base>

                            </Main>
                            <div className="spacer3"></div>
                        </StyledContainer>


                        

                        </div>
                    </Layout.Container>
                </StyledSection>
            </div>
        )
    }

    handle200(response) {
        console.log('handle200 has received:', response);
    }

    checkPage(callback, bookingId: string, nric: string, citizenName: string, citizenEmail: string, citizenNumber: string, booking: Booking) {
        this.state.bookings.forEach(element => queueNumberArray.push(Number(element.QueueNumber.slice(1)) ));

        console.log("test!!" + queueNumberArray)

        var num = Math.max.apply(null, queueNumberArray) + 1;

        console.log(num);
        
        var str = String(num);

        while (str.length < 4 ) str = "0" + str;
         
        str = "H" + str;
        booking.QueueNumber = str;

        console.log(str)
        

   
        const queueObject = {
            "_id": bookingId,
            "nric": nric,
            "citizenName": citizenName,
            "citizenEmail": citizenEmail,
            "citizenNumber": booking.CitizenNumber,
            "citizenSalutation": booking.CitizenSalutation,
            "serviceName": booking.ServiceName,
            "serviceProviderEmail": booking.ServiceProviderEmail,
            "serviceProviderName": booking.ServiceProviderName,
            "serviceStartDate": booking.ServiceStartDate,
            "serviceProviderPhone": booking.ServiceProviderPhone,
            "serviceStartTime": booking.ServiceStartTime,
            "serviceProviderLocation": booking.ServiceProviderLocation,
            "bookingStatus": booking.BookingStatus,
            "queueNumber": str,
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





var pad = function(num) {
    var str = String(num++);
    while (str.length < 4) str = "0" + str;
    return str;
}; 


// function closeModalFn(): (() => void) | undefined { 
//     throw new Error('Function not implemented.');
// }
// const [show, setShow ] = useState(false)
// function closeModal(): (() => void) | undefined {
//     document.getElementById("divModal")!!.style.display = "none";
//     throw new Error('Function not implemented.');
// }
// call checkPage once

