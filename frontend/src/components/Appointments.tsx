import React from 'react';
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
    showDIVHPBcomuunityHealth: string,
    showDIVHPBworkplaceHealth: string,
    showGeneralServiceDropDown: string,
    showGeneralServiceDropDownHospital: string,
    dropDownHint: string,
    generatedNumber: string,
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
            showDivHPBView: "block",
            showHospitalView: "none",
            showGeneralTypeDropDownHPB: "none",
            showDIVHPBcomuunityHealth: "block",
            showDIVHPBworkplaceHealth: "block",
            showGeneralServiceDropDown: "none",
            showGeneralServiceDropDownHospital: "none",
            dropDownHint: "Select a service",
            generatedNumber: "",

        };
        this.loadData = this.loadData.bind(this);

    }


    componentDidMount() {
        this.loadData();
    }

    async loadData() {
        try {
            var apiURL: string
            apiURL = process.env.REACT_APP_APPOINTMENT_API_ADDRESS + 'api/booking/location/Tampines';

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

                        this.state.bookings.push(eachBooking)
                        this.setState({
                            bookings: this.state.bookings,
                            clicked: 'block'
                        });

                    });
                });

        } catch (e) {
            console.log(e);
        }


    }



    public async searchByLocation(val: string) {


        if (val == "General Practioner") {
            this.loadData();

            this.setState({
                showSpecialist: 'none',
                showDivider: 'none',
                showGeneralPractioner: 'block',
                showNRIC: 'none',
                showGeneralTypeDropDown: 'block',
                showGeneralServiceDropDownHospital: 'none'
            });



        }
        if (val == "Specialist") {
            this.loadData();

            this.setState({
                showSpecialist: 'block',
                showDivider: 'none',
                showGeneralPractioner: 'none',
                showNRIC: 'none',
                showGeneralTypeDropDown: 'block',
                showGeneralServiceDropDownHospital: 'none'

            });
            window.location.reload()

            this.loadData();


        }

        if (val == "communityHealth") {
            this.loadData();

            this.setState({
                showSpecialist: 'none',
                showDivider: 'none',
                showGeneralPractioner: 'none',
                showNRIC: 'none',
                showGeneralTypeDropDownHPB: 'block',
                showDIVHPBcomuunityHealth: "block",
                showDIVHPBworkplaceHealth: "none",
                showGeneralServiceDropDownHospital: 'none'

            });



        }

        if (val == "workplaceHealth") {
            this.loadData();

            this.setState({
                showSpecialist: 'none',
                showDivider: 'none',
                showGeneralPractioner: 'none',
                showNRIC: 'none',
                showGeneralTypeDropDownHPB: 'block',
                showDIVHPBcomuunityHealth: "none",
                showDIVHPBworkplaceHealth: "block",
                showGeneralServiceDropDownHospital: 'none'

            });




        }



        if (val == "NRIC") {

            this.setState({
                showGeneralServiceDropDownHospital: 'none'
            })

            if (this.state.inputValue == '' || this.state.inputValue == null) {
                return;
            }

            var apiURL: string
            apiURL = process.env.REACT_APP_APPOINTMENT_API_ADDRESS + 'api/booking/citizen/' + this.state.inputValue;
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

                        this.state.bookings.push(eachBooking)

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
                    >
                        <Modal.Box onClose={() => {

                            this.setState({
                                showModal: false
                            });



                        }}>
                            <ModalContent>
                                Send to queue successfully
                                <b> {this.state.generatedNumber}</b>
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

                        <div id='hpbView' style={{ display: this.state.showDivHPBView }}>


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
                                            showDIVHPBworkplaceHealth: "none",
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
                                    placeholder={this.state.dropDownHint}
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
                                                {this.state.bookings.filter((element => 
                                                
                                                (
                                                    (element.GeneralType == 'HPB Consultation - communityHealth' && element.BookingStatus.includes('New')) 
                                                    || element.BookingStatus.includes("communityHealth")
                                                    
                                                    ))).map((input, index) => {
                                                    var showButton = 'none';
                                                    if (((input.BookingStatus == 'New' || input.BookingStatus.includes("Missed")) && input.ServiceProviderName.includes("HPB")  ) ){
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
                                                                        onClick={() => this.checkPage(this.handle200, input)}
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
                                                {this.state.bookings.filter(
                                                    
                                                    (
                                                        
                                                        element => (element.GeneralType == 'HPB Consultation - workplaceHealth' && element.BookingStatus.includes('New')) 
                                                        || element.BookingStatus.includes("workplaceHealth"))
    
                                                    
                                                    ).map((input, index) => {
                                                    var showButton = 'none';
                                                    if (((input.BookingStatus == 'New' || input.BookingStatus.includes("Missed")) && input.ServiceProviderName.includes("HPB")  ) ){
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
                                                                        onClick={() => this.checkPage(this.handle200, input)}
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
                                                        if (((input.BookingStatus == 'New' || input.BookingStatus.includes("Missed")) && input.ServiceProviderName.includes("HPB") || input.BookingStatus.includes ('workplaceHealth') || input.BookingStatus.includes ('communityHealth') ) ){
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
                                                                            onClick={() => this.checkPage(this.handle200, input)}
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

                        <div id='hospitalView' style={{ display: this.state.showHospitalView }}>


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
                                            selected: 'C',
                                            showSpecialist: 'none',
                                            showDivider: 'none',
                                            showGeneralPractioner: 'none',
                                            showNRIC: 'none',
                                            showGeneralServiceDropDownHospital: 'block',
                                            showDivCitizenAppoinments: 'none',
                                            chooseOtherOptions: true
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

                            <div className="inlinecontent" style={{ justifyItems: "start", maxWidth: '400px', display: this.state.showGeneralServiceDropDownHospital }}>
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
                                                {this.state.bookings.filter((element => 
                                                
                                                (element.GeneralType == 'General Practioner' && element.BookingStatus.includes('New')) 
                                                    || element.BookingStatus.includes("Doctor") || element.BookingStatus.includes("Payment") || element.BookingStatus.includes("Pharmacy") )

                                                
                                                ).map((input, index) => {
                                                    var showButton = 'none';
                                                    if ((input.BookingStatus == 'New' || input.BookingStatus.includes("Missed")) && !input.ServiceProviderName.includes("HPB")  || input.BookingStatus.includes("Missed") ){
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
                                                                        onClick={() => this.checkPage(this.handle200, input)}
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
                                                        if ((( (input.BookingStatus == 'New' || input.BookingStatus.includes("Missed")) && !input.ServiceProviderName.includes("HPB")) || input.BookingStatus.includes ('Payment') || input.BookingStatus.includes ('Missed') || input.BookingStatus.includes ('Pharmacy') || input.BookingStatus.includes ('Doctor')) ){
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
                                                                            onClick={() => this.checkPage(this.handle200, input)}
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
                                                            if ((input.BookingStatus == 'New' || input.BookingStatus.includes("Missed")) && !input.ServiceProviderName.includes("HPB") || input.BookingStatus.includes("Missed")  ){
                                                                showButton = 'none';
                                                            }
                                                            else{
                                                                showButton = 'block'
                                                            }
                                                            if (input.GeneralType == 'General Practionar') {
                                                            }
                                                            return (
                                                                <Accordion.Item title={input.CitizenName + " - "  + input.QueueNumber} key={index} expanded={false}>
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
                                                                                onClick={() => this.checkPage(this.handle200, input)}
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

    checkPage(callback, booking: Booking) {
        this.loadData()

        queueNumberArray.push(0)

        var num = Math.max.apply(null, queueNumberArray) + 1;
        queueNumberArray.push(num)

        var str = String(num);
        while (str.length < 4) str = "0" + str;
        str = "H" + str;
        var date = new Date().toISOString().split('T')[0]
        
        if(booking.QueueNumber == ""){
            booking.QueueNumber = str
            this.setState({
                generatedNumber: "Generated queue number is " + str
            })
        }
        else{
            booking.QueueNumber = booking.QueueNumber
            this.setState({
                generatedNumber: "Current queue number is " + booking.QueueNumber
            })
        }

        

        const myJSON = encodeURI(JSON.stringify(booking));

        var updatedURL = "";

        if ( (booking.GeneralType == "HPB Consultation - workplaceHealth" && booking.BookingStatus == "New") || booking.BookingStatus.includes( "workplaceHealth")) {
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + booking.Id + "&exchangeID=master&bindingKey=hpb.whq&bookingDetails=" + myJSON;
        }
        else if ( (booking.GeneralType == "HPB Consultation - communityHealth" && booking.BookingStatus =="New") || booking.BookingStatus.includes("communityHealth")) {
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + booking.Id + "&exchangeID=master&bindingKey=hpb.chq&bookingDetails=" + myJSON;
        }
        else if ( (booking.GeneralType == "General Practionar" && booking.BookingStatus =="New") || (booking.GeneralType == "Specialist" && booking.BookingStatus =="New") || booking.BookingStatus.includes("Doctor")) {
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + booking.Id + "&exchangeID=master&bindingKey=sgh.doctor&bookingDetails=" + myJSON;
        }
        else if (booking.BookingStatus == "Doctor-Missed" || booking.BookingStatus.includes("Doctor")) {
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + booking.Id + "&exchangeID=master&bindingKey=sgh.doctor&bookingDetails=" + myJSON;
        }
        else if (booking.BookingStatus == "Payment-Missed" || booking.BookingStatus.includes("Payment")) {
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + booking.Id + "&exchangeID=master&bindingKey=sgh.payment&bookingDetails=" + myJSON;
        }
        else if (booking.BookingStatus == "Pharmacy-Missed" || booking.BookingStatus.includes("Pharmcy")) {
            updatedURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + booking.Id + "&exchangeID=master&bindingKey=sgh.pharmcy&bookingDetails=" + myJSON;
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


                if ( (booking.GeneralType.toString().includes("workplaceHealth") && booking.BookingStatus == "New") || booking.BookingStatus == "workplaceHealth-Missed") {
                    booking.BookingStatus = "workplaceHealth-Queued";
                }
                else if ( (booking.GeneralType.toString().includes("communityHealth") && booking.BookingStatus == "New") || booking.BookingStatus == "communityHealth-Missed") {
                    booking.BookingStatus = "communityHealth-Queued";
                }

                else if ( (booking.GeneralType.toString().includes("General Practionar") && booking.BookingStatus == "New") || booking.BookingStatus == "Doctor-Missed") {
                    booking.BookingStatus = "Doctor-Queued";
                }
                else if ( (booking.GeneralType.toString().includes("Specialist") && booking.BookingStatus == "New") || booking.BookingStatus == "Doctor-Missed") {
                    booking.BookingStatus = "Doctor-Queued";
                }
                else if (  booking.BookingStatus == "Payment-Missed" ) {
                    booking.BookingStatus = "Payment-Queued";
                }
                else if ( booking.BookingStatus == "Pharmacy-Missed"){
                    booking.BookingStatus = "Pharmacy-Queued";
                }

                



          

                BaseService.update<Booking>(process.env.REACT_APP_APPOINTMENT_API_ADDRESS + "api/booking/update/", booking.Id, booking).then(

                    (rp) => {
                        if (rp.Status) {

                        this.setState({
                            showModal: true
                        })
                        this.loadData()
                    
                    } else {
                            console.log(rp.Messages);
                            console.log("Messages: " + rp.Messages);
                            console.log("Exception: " + rp.Exception);
                        }
                    }
                );


                return callback(xhr.status);
            }

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
