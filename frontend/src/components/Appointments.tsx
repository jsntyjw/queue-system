import React, { useState } from 'react';
import '../App.css';
import { Text, Button, Layout, BoxContainer, Breadcrumb, InputGroup, Accordion, InputSelect, Modal, RadioButton, LinkList, } from 'react-lifesg-design-system';
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
    showGeneralPractioner: string,
    showDivider: string,
    showSpecialist: string,
    showGeneralTypeDropDown: string,
    selected: string,
    showDivCitizenAppoinments: string,
    chooseOtherOptions: boolean,
    agencySelection: string,
    showDivHPBView: string,
    showHospitalView: string,
    showGeneralTypeDropDownHPB: string,
    showDIVHPBcomuunityHealth:string,
    showDIVHPBworkplaceHealth:string,
    showGeneralServiceDropDown: string,
    showGeneralServiceDropDownHospital: string,
    dropDownHint:string
}

var queueNumberArray: number[] = [];





class Appointment extends React.Component<{}, MyState> {



    constructor(props) {
        super(props);
        this.state = {
            bookings: [],
            inputValue: '',
            clicked: 'none',
            showModal: false,
            showNRIC: 'none',
            showGeneralPractioner: 'block',
            showDivider: 'block',
            showSpecialist: 'block',
            showGeneralTypeDropDown: 'none',
            selected: 'A',
            showDivCitizenAppoinments: 'none',
            chooseOtherOptions: false,
            agencySelection: "HPB",
            showDivHPBView:"block",
            showHospitalView: "none",
            showGeneralTypeDropDownHPB:"none",
            showDIVHPBcomuunityHealth: "block",
            showDIVHPBworkplaceHealth: "block",
            showGeneralServiceDropDown: "none",
            showGeneralServiceDropDownHospital: "none",
            dropDownHint:"Select a service"
        };
        this.loadData = this.loadData.bind(this)
    }


    componentDidMount() {
        this.loadData();

    }

    async loadData() {
        if (this.state.chooseOtherOptions == false) {
            try {
                var apiURL: string
                apiURL = process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking/location/Tampines';

                fetch(apiURL)
                    .then(function (response) {

                        return response.json();
                    })
                    .then((myJson) => {
                        this.setState({
                            bookings: []
                        })
                        myJson.data.forEach(element => {
                            var eachBooking = new Booking(
                                element["_id"],
                                element["nric"],
                                element["citizenName"],
                                element["citizenSalutation"],
                                element["citizenEmail"],
                                element["citizenNumber"],
                                element["generalType"],
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

                //   console.log(blocks.data)
            } catch (e) {
                console.log(e);
            }
        }

    }

    public async searchByLocation(val: string) {

        console.log(val)

        if (val == "General Practioner") {

            this.setState({
                showSpecialist: 'none',
                showDivider: 'none',
                showGeneralPractioner: 'block',
                showNRIC: 'none',
                showGeneralTypeDropDown: 'block'
            });




        }
        if (val == "Specialist") {
            this.setState({
                showSpecialist: 'block',
                showDivider: 'none',
                showGeneralPractioner: 'none',
                showNRIC: 'none',
                showGeneralTypeDropDown: 'block'
            });

        }

        if (val == "communityHealth") {

            this.setState({
                showSpecialist: 'none',
                showDivider: 'none',
                showGeneralPractioner: 'none',
                showNRIC: 'none',
                showGeneralTypeDropDownHPB: 'block',
                showDIVHPBcomuunityHealth: "block",
                showDIVHPBworkplaceHealth: "none"
            });




        }

        if (val == "workplaceHealth") {

            this.setState({
                showSpecialist: 'none',
                showDivider: 'none',
                showGeneralPractioner: 'none',
                showNRIC: 'none',
                showGeneralTypeDropDownHPB: 'block',
                showDIVHPBcomuunityHealth: "none",
                showDIVHPBworkplaceHealth: "block"
            });




        }

       

        if (val == "NRIC") {
            var apiURL: string
            apiURL = process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking/citizen/' + this.state.inputValue;
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
                            element["generalType"],
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
                            clicked: 'block',
                            showDivCitizenAppoinments: 'block'
                        });

                    });
                });
        }
 

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


                        Change Agency View:
                        <div id='divAgency' className="inlinecontent" style={{ justifyItems: "start", maxWidth: '400px' }}>
                            <InputSelect
                                options={[
                                    { value: "HPB", label: "HPB" },
                                    { value: "Hospital", label: "Hospital" },

                                ]}

                                valueExtractor={(item) => item.value}
                                listExtractor={(item) => item.label}

                                displayValueExtractor={(item) => item.label}
                                placeholder={this.state.agencySelection}
                                onSelectItem={(item, selectedValue) => {
                                    this.setState({ inputValue: selectedValue }, () => {
                                        this.ddlAgency(selectedValue)

                                    });
                                }} />

                        </div>

                        <br />

                        <div id='hpbView' style={{display: this.state.showDivHPBView}}>


                            <Container>
                                <OptionContainer>
                                    <RadioButton value="A" id="multiple-options-a" name="multiple-options" onChange={() => {
                                        this.setState({
                                            selected: 'A',
                                            showSpecialist: 'block',
                                            showDivider: 'block',
                                            showGeneralPractioner: 'block',
                                            showNRIC: 'none',
                                            showGeneralTypeDropDown: 'none',
                                            showDivCitizenAppoinments: 'none',
                                            chooseOtherOptions: false,
                                            showGeneralTypeDropDownHPB: "none",
                                            showDIVHPBcomuunityHealth: "block",
                                            showDIVHPBworkplaceHealth: "block"

                                        }

                                        );
                                        
                                        this.loadData();
                                    }

                                    } checked={this.state.selected === "A"} />
                                    <Label htmlFor="multiple-options-a">View All Appointments</Label>
                                </OptionContainer>
                                <OptionContainer>
                                    <RadioButton value="B" id="multiple-options-b" name="multiple-options" onChange={() => {
                                        this.setState({
                                            selected: 'B',
                                            showSpecialist: 'none',
                                            showDivider: 'none',
                                            showGeneralPractioner: 'none',
                                            showNRIC: 'block',
                                            showGeneralTypeDropDown: 'none',
                                            showDivCitizenAppoinments: 'none',
                                            chooseOtherOptions: true,
                                            showGeneralTypeDropDownHPB: "none",
                                            showDIVHPBcomuunityHealth: "none",
                                            showDIVHPBworkplaceHealth: "none"
                                        }

                                        );
                                    }} checked={this.state.selected === "B"} />
                                    <Label htmlFor="multiple-options-b">View appointments by NRIC</Label>
                                </OptionContainer>


                                <OptionContainer>
                                    <RadioButton value="C" id="multiple-options-c" name="multiple-options" onChange={() => {
                                        this.setState({
                                            selected: 'C',
                                            showSpecialist: 'none',
                                            showDivider: 'none',
                                            showGeneralPractioner: 'none',
                                            showNRIC: 'none',
                                            showGeneralTypeDropDown: 'none',
                                            showDivCitizenAppoinments: 'none',
                                            chooseOtherOptions: true,
                                            showGeneralTypeDropDownHPB: "block",
                                            showDIVHPBworkplaceHealth :"none",
                                            showDIVHPBcomuunityHealth: "none",
                                            showGeneralServiceDropDownHospital: "block",
                                            dropDownHint: "Select a service"
                                        }

                                        );
                                    }} checked={this.state.selected === "C"} />
                                    <Label htmlFor="multiple-options-c">View appointments by service</Label>
                                </OptionContainer>
                                
                            </Container>

                            <div className="spacer2"></div>

                            <div id='divNRIC' style={{ justifyItems: "start", maxWidth: '400px', display: this.state.showNRIC }}>
                                <div style={{ 'margin': '5px' }}>
                                    <Text.Body >Search by NRIC: </Text.Body>
                                </div>
                                <InputGroup addon={{
                                    type: 'custom'
                                }} placeholder="Type NRIC here..."

                                    onChange={evt => this.updateInputValue(evt)}
                                />

                                <div style={{ 'padding': '5px' }}></div>
                                <Button.Default onClick={() => this.searchByLocation("NRIC")} >Search</Button.Default>
                            </div>


                            <div id='divLocation' className="inlinecontent" style={{ justifyItems: "start", maxWidth: '400px', display: this.state.showGeneralTypeDropDownHPB }}>
                                <InputSelect
                                    options={[
                                        { value: "communityHealth", label: "communityHealth" },
                                        { value: "workplaceHealth", label: "workplaceHealth" },

                                    ]}

                                    valueExtractor={(item) => item.value}
                                    listExtractor={(item) => item.label}
                                    displayValueExtractor={(item) => item.label}
                                    placeholder= {this.state.dropDownHint}
                                    onSelectItem={(item, selectedValue) => {
                                        this.setState({ inputValue: selectedValue }, () => {
                                            this.searchByLocation(selectedValue)
                                        });
                                    }} />

                            </div>


                            <div className="spacer5"></div>

                            <div id='divAppointments' >

                                <div id='divGeneralPractioner' className='rcorner2' style={{ 'display': this.state.showDIVHPBcomuunityHealth }}>


                                    <StyledContainer>
                                        <Text.H3>Appointments [HPB Consultation - communityHealth]</Text.H3>
                                        <Text.Body>Government services appointments</Text.Body>
                                        <Main>




                                            <Accordion.Base className='base' >
                                                {this.state.bookings.filter((element => element.GeneralType == 'HPB Consultation - communityHealth')).map((input, index) => {
                                                    var showButton = 'none';
                                                    if (input.BookingStatus == 'New') {
                                                        showButton = 'block';
                                                    }
                                                    console.log(this.state.bookings)
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
                                                                    <li>
                                                                        <b>Service Status:</b>  {input.BookingStatus}
                                                                    </li>
                                                                </ul>
                                                                <div style={{ 'display': showButton }}>
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
                                    
                                    <br />
                                    
                                    <div id='divGeneralPractioner' className='rcorner' style={{ 'display': this.state.showDIVHPBworkplaceHealth }}>

                                    <StyledContainer>
                                        <Text.H3>Appointments [HPB Consultation - workplaceHealth]</Text.H3>
                                        <Text.Body>Government services appointments</Text.Body>
                                        <Main>




                                            <Accordion.Base className='base' >
                                                {this.state.bookings.filter((element => element.GeneralType == 'HPB Consultation - workplaceHealth')).map((input, index) => {
                                                    var showButton = 'none';
                                                    if (input.BookingStatus == 'New') {
                                                        showButton = 'block';
                                                    }
                                                    console.log(this.state.bookings)
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
                                                                    <li>
                                                                        <b>Service Status:</b>  {input.BookingStatus}
                                                                    </li>
                                                                </ul>
                                                                <div style={{ 'display': showButton }}>
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

                                
                                <div id='divDivider' className="spacer5" style={{ 'display': this.state.showDivider }}></div>

                                <div id='divCitizenAppointments' style={{ 'display': this.state.showDivCitizenAppoinments }}>
                                    <Main>




                                        <Accordion.Base className='base' >
                                            {

                                                this.state.bookings.filter((element => element.ServiceProviderLocation == 'Tampines')).map(


                                                    (input, index) => {

                                                        var showButton = 'none';
                                                        if (input.BookingStatus == 'New') {
                                                            showButton = 'block';
                                                        }

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
                                                                        <li>
                                                                            <b>Service Status:</b>  {input.BookingStatus}
                                                                        </li>
                                                                    </ul>
                                                                    <div style={{ 'display': showButton }}>
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
                                </div>

                            


                            </div>

                        </div>

                        <div id='hospitalView' style={{display: this.state.showHospitalView}}>


                            <Container>
                                <OptionContainer>
                                    <RadioButton value="A" id="multiple-options-a" name="multiple-options" onChange={() => {
                                        this.setState({
                                            selected: 'A',
                                            showSpecialist: 'block',
                                            showDivider: 'block',
                                            showGeneralPractioner: 'block',
                                            showNRIC: 'none',
                                            showGeneralServiceDropDownHospital: 'none',
                                            showDivCitizenAppoinments: 'none',
                                            chooseOtherOptions: false
                                        }

                                        );
                                        console.log("testing!!!!1")
                                        this.loadData();
                                    }

                                    } checked={this.state.selected === "A"} />
                                    <Label htmlFor="multiple-options-a">View All Appointments</Label>
                                </OptionContainer>
                                <OptionContainer>
                                    <RadioButton value="B" id="multiple-options-b" name="multiple-options" onChange={() => {
                                        this.setState({
                                            selected: 'B',
                                            showSpecialist: 'none',
                                            showDivider: 'none',
                                            showGeneralPractioner: 'none',
                                            showNRIC: 'block',
                                            showGeneralServiceDropDownHospital: 'none',
                                            showDivCitizenAppoinments: 'none',
                                            chooseOtherOptions: true

                                        }

                                        );
                                    }} checked={this.state.selected === "B"} />
                                    <Label htmlFor="multiple-options-b">View appointments by NRIC</Label>
                                </OptionContainer>
                                <OptionContainer>
                                    <RadioButton value="C" id="multiple-options-c" name="multiple-options" onChange={() => {
                                        this.setState({
                                            showGeneralServiceDropDownHospital: 'block',
                                        });

                                    }} checked={this.state.selected === "C"} />
                                    <Label htmlFor="multiple-options-c">View Appointments by Service Type</Label>
                                </OptionContainer>
                            </Container>

                            <div className="spacer2"></div>

                            <div id='divNRIC' style={{ justifyItems: "start", maxWidth: '400px', display: this.state.showNRIC }}>
                                <div style={{ 'margin': '5px' }}>
                                    <Text.Body >Search by NRIC: </Text.Body>
                                </div>
                                <InputGroup addon={{
                                    type: 'custom'
                                }} placeholder="Type NRIC here..."

                                    onChange={evt => this.updateInputValue(evt)}
                                />

                                <div style={{ 'padding': '5px' }}></div>
                                <Button.Default onClick={() => this.searchByLocation("NRIC")} >Search</Button.Default>
                            </div>

                            <div  className="inlinecontent" style={{ justifyItems: "start", maxWidth: '400px', display: this.state.showGeneralServiceDropDownHospital }}>
                                <InputSelect
                                    options={[
                                        { value: "General Practioner", label: "General Practioner" },
                                        { value: "Specialist", label: "Specialist" },

                                    ]}

                                    valueExtractor={(item) => item.value}
                                    listExtractor={(item) => item.label}
                                    displayValueExtractor={(item) => item.label}
                                    placeholder="Select a service type"
                                    onSelectItem={(item, selectedValue) => {
                                        this.setState({ inputValue: selectedValue }, () => {
                                            this.searchByLocation(selectedValue)
                                        });
                                    }} />

                            </div>



                            <div className="spacer5"></div>

                            <div id='divAppointments' >

                                <div id='divGeneralPractioner' className='rcorner2' style={{ 'display': this.state.showGeneralPractioner }}>


                                    <StyledContainer>
                                        <Text.H3>Appointments [General Practioner]</Text.H3>
                                        <Text.Body>Government services appointments</Text.Body>
                                        <Main>




                                            <Accordion.Base className='base' >
                                                {this.state.bookings.filter((element => element.GeneralType == 'General Practionar')).map((input, index) => {
                                                    var showButton = 'none';
                                                    if (input.BookingStatus == 'New') {
                                                        showButton = 'block';
                                                    }
                                                    console.log(this.state.bookings)
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
                                                                    <li>
                                                                        <b>Service Status:</b>  {input.BookingStatus}
                                                                    </li>
                                                                </ul>
                                                                <div style={{ 'display': showButton }}>
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
                                <div id='divDivider' className="spacer5" style={{ 'display': this.state.showDivider }}></div>

                                <div id='divCitizenAppointments' style={{ 'display': this.state.showDivCitizenAppoinments }}>
                                    <Main>




                                        <Accordion.Base className='base' >
                                            {

                                                this.state.bookings.filter((element => element.ServiceProviderLocation == 'Tampines')).map(


                                                    (input, index) => {

                                                        var showButton = 'none';
                                                        if (input.BookingStatus == 'New') {
                                                            showButton = 'block';
                                                        }

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
                                                                        <li>
                                                                            <b>Service Status:</b>  {input.BookingStatus}
                                                                        </li>
                                                                    </ul>
                                                                    <div style={{ 'display': showButton }}>
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
                                </div>

                                <div id='divSpecialist' className='rcorner' style={{ 'display': this.state.showSpecialist }}>


                                    <StyledContainer>
                                        <Text.H3>Appointments [Specialist]</Text.H3>
                                        <Text.Body>Government services appointments</Text.Body>
                                        <Main>




                                            <Accordion.Base className='base' >
                                                {

                                                    this.state.bookings.filter((element => element.GeneralType == 'Specialist')).map(


                                                        (input, index) => {

                                                            var showButton = 'none';
                                                            if (input.BookingStatus == 'New') {
                                                                showButton = 'block';
                                                            }
                                                            console.log(this.state.bookings)
                                                            if (input.GeneralType == 'General Practionar') {
                                                            }
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
                                                                            <li>
                                                                                <b>Service Status:</b>  {input.BookingStatus}
                                                                            </li>
                                                                        </ul>
                                                                        <div style={{ 'display': showButton }}>
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


                            </div>

                        </div>
                    </Layout.Container>
                </StyledSection>
            </div>
        )
    }

    ddlAgency(selectedValue: any) {
        if (selectedValue == "HPB") {
            this.setState({
                showDivHPBView: "block",
                showHospitalView: "none",
                showDivCitizenAppoinments: "none",
                dropDownHint: "Select a service"

            })
        }
        else {
            this.setState({
                showDivHPBView: "none",
                showHospitalView: "block",
                showDivCitizenAppoinments: "none",
                dropDownHint: "Select a service"


            })
        }
    }

    handle200(response) {
        console.log('handle200 has received:', response);
    }

    checkPage(callback, bookingId: string, nric: string, citizenName: string, citizenEmail: string, citizenNumber: string, booking: Booking) {
        this.state.bookings.forEach(element => queueNumberArray.push(Number(element.QueueNumber.slice(1))));


        var num = Math.max.apply(null, queueNumberArray) + 1;

        var str = String(num);

        while (str.length < 4) str = "0" + str;

        str = "H" + str;
        booking.QueueNumber = str;




        const queueObject = {
            "_id": bookingId,
            "nric": nric,
            "citizenName": citizenName,
            "citizenEmail": citizenEmail,
            "citizenNumber": booking.CitizenNumber,
            "citizenSalutation": booking.CitizenSalutation,
            "generalType": booking.GeneralType,
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

        var updatedURL = "";

        if(queueObject.generalType == "HPB Consultation - workplaceHealth"){
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=hpb.whq&bookingDetails=" + myJSON;
        }
        else if(queueObject.generalType == "HPB Consultation - communityHealth"){
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=hpb.chq&bookingDetails=" + myJSON;
        }
        else if(queueObject.generalType == "General Practionar"){
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=sgh.doctor&bookingDetails=" + myJSON;
        }
        else if(queueObject.generalType == "Specialist"){
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=sgh.doctor&bookingDetails=" + myJSON;
        }



        const xhr = new XMLHttpRequest(),
            method = "GET",
            url = updatedURL;

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





var pad = function (num) {
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

