import React from 'react';
import '../App.css';
import {
    Text,
    Button,
    Layout,
    Breadcrumb,
    BoxContainer,
    InputSelect,
    Modal
} from 'react-lifesg-design-system';
import styled from "styled-components";

import Booking from "../models/booking";


import { ModalContent } from "../models/doc-elements";
import BaseService from '../service/base.service';


interface Props {
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

interface MyState {
    _bookingId: string,
    nric: string,
    citizenName: string,
    citizenNumber: string,
    citizenEmail: string,
    inputValue: string,
    queueNumber: string,
    showModal: boolean,
    citizenSalutation: string,
    generalType: string,
    serviceName: string,
    serviceProviderEmail: string,
    serviceProviderName: string,
    serviceStartDate: string,
    serviceProviderPhone: string,
    serviceStartTime: string,
    serviceProviderLocation: string,
    bookingStatus: string,
    selectionWork: string,
    queueName: string,
    elementNobodyInQueue: string,
    showCurrentCitizen: string
}



class ServiceCounter extends React.Component<{}, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            _bookingId: "",
            nric: "",
            citizenName: "",
            citizenNumber: "",
            citizenEmail: "",
            inputValue: "",
            queueNumber: "",
            showModal: false,
            citizenSalutation: "",
            generalType: "",
            serviceName: "",
            serviceProviderEmail: "",
            serviceProviderName: "",
            serviceStartDate: "",
            serviceProviderPhone: "",
            serviceStartTime: "",
            serviceProviderLocation: "",
            bookingStatus: "",
            selectionWork: "doctor",
            queueName: "doctorQueue",
            elementNobodyInQueue: "none",
            showCurrentCitizen: "none"


        };

        this.consumeQueue = this.consumeQueue.bind(this)

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


                    <Breadcrumb links={[{ title: 'Home', url: 'http://localhost:3000/ServiceCounter' }, { title: 'Service Counter' }]} />


                    <div id='divLocation' className="inlinecontent" style={{ justifyItems: "start", maxWidth: '400px' }}>
                            <InputSelect
                                options={[
                                    { value: "Doctor", label: "Doctor" },
                                    { value: "Payment", label: "Payment" },
                                    { value: "Pharmacy", label: "Pharmacy" },

                                ]}

                                valueExtractor={(item) => item.value}
                                listExtractor={(item) => item.label}

                                displayValueExtractor={(item) => item.label}
                                placeholder="Select other work"
                                onSelectItem={(item, selectedValue) => {
                                    this.setState({ inputValue: selectedValue }, () => {
                                        this.ddlWorkType(selectedValue)
                                        
                                    });
                                }} />

                        </div>

                        <br></br>

                        Your are selecting as <b>{this.state.selectionWork}</b>

                        <br /><br />
                    <div id='divButtonNextPatient'>

                        
                        <Button.Default className='buttonsuccess'
                            onClick={() => this.consumeQueue(this.handle200, "nextPatient")}
                        >Next Number</Button.Default>
                        <p style={{'color': "green", 'fontSize': 30, 'display': this.state.elementNobodyInQueue}}>There is no one in the queue😄</p>
                    </div>
                    <div id='divCurrentCitizen' style={{ display: this.state.showCurrentCitizen }}>
                        
                        <Layout.GridContainer className="column2">
                            <div>
                                <div className='spacer1'></div>

                                <Text.H3>Currently Serving</Text.H3>

                                <div className='spacer1'></div>
                                <div className='spacer1'></div>

                                <BoxContainer title="Citizen Information" collapsible={false} className="textleft" >
                                    <div style={{ padding: "2rem", minWidth: "1080px" }}>
                                        <Layout.GridContainer className="column4">
                                            <Text.Body weight="semibold">NRIC</Text.Body>
                                            <Text.Body weight="semibold">Name</Text.Body>
                                            <Text.Body weight="semibold">Phone Number</Text.Body>
                                            <Text.Body weight="semibold">Email</Text.Body>
                                            <Text.Body>{this.state.nric}</Text.Body>
                                            <Text.Body>{this.state.citizenName}</Text.Body>
                                            <Text.Body>{this.state.citizenNumber}</Text.Body>
                                            <Text.Body>{this.state.citizenEmail}</Text.Body>
                                        </Layout.GridContainer>
                                    </div>
                                </BoxContainer>


                                <Text.Body>Next service: </Text.Body>


                            </div>

                        </Layout.GridContainer>


                        <Layout.GridContainer className="column4">

                            <InputSelect
                                placeholder="Select"
                                options={[
                                    { value: "payment", label: "Payment" },
                                    { value: "pharmacy", label: "Pharmacy" }
                                ]}
                                valueExtractor={(item) => item.value}
                                listExtractor={(item) => item.label}
                                displayValueExtractor={(item) => item.label}
                                onSelectItem={(item, selectedValue) => {

                                    this.setState({
                                        selectionWork: selectedValue
                                    })
                                }}
                            />
                        </Layout.GridContainer>


                        <div className='spacer1'></div>


                        <Button.Default
                            onClick={() => this.consumeQueue(this.handle200, "sendtoNextService", this.state._bookingId, this.state.nric, this.state.citizenName, this.state.citizenEmail, this.state.citizenNumber, this.state.queueNumber)}

                        >Send to next service</Button.Default>

                    </div>

                </Layout.Container>
            </StyledSection>
        )
    }
    ddlWorkType(selectedValue: any) {
        if (selectedValue == "Doctor") {
            this.setState({
                selectionWork: "doctor",
                showCurrentCitizen: "none"
            })
        }
        else if (selectedValue == "Payment") {
            this.setState({
                selectionWork: "payment",
                showCurrentCitizen: "none"
            })
        }
        else {
            this.setState({
                selectionWork: "pharmacy",
                showCurrentCitizen: "none"
            })
        }
    }


    handle200(response) {
        console.log('handle200 has received:', response);
    }



    consumeQueue(callback, buttonSelected: string, bookingId?: string, nric?: string, citizenName?: string, citizenEmail?: string, citizenNumber?: string, queueNumber?: string) {

        var respectiveURL = ""
        if (buttonSelected == "nextPatient") {

            respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/receiver?queueName=" + this.state.selectionWork + "Queue"
            // respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/receiver?queueName=paymentQueue"
            // respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/receiver?queueName=pharmacyQueue"
            console.log("testing:" + respectiveURL)

        }
        if (buttonSelected == "sendtoNextService") {

            const queueObject = {
                "_id": bookingId,
                "nric": nric,
                "citizenName": citizenName,
                "citizenEmail": citizenEmail,
                "citizenNumber": citizenNumber,
                "queueNumber": queueNumber,
            }

            var myJSON = encodeURI(JSON.stringify(queueObject));
            respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=sgh." + this.state.selectionWork + "&bookingDetails=" + myJSON;
            // respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=sgh.payment&bookingDetails=" + myJSON;
            // respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=master&bindingKey=sgh.pharmacy&bookingDetails=" + myJSON;

            console.log("------- testing here -------")
            console.log(respectiveURL)

        }




        const xhr = new XMLHttpRequest(),
            method = "GET",
            url = respectiveURL;
        // initialize a new GET request
        xhr.open(method, url, true);

        // respond to every readyState change
        xhr.onreadystatechange = () => {

            // ignore all readyStates other than "DONE"
            if (xhr.readyState !== XMLHttpRequest.DONE) { 
                
                // this.setState({
                //     elementNobodyInQueue : "block"
                // })
                
                 return; }

            // call the callback with status
            if (xhr.status === 200) {

                var calledBooking: Booking;
                if (buttonSelected == "nextPatient") {
                    this.setState({
                        _bookingId: JSON.parse(xhr.responseText)._id,
                        nric: JSON.parse(xhr.responseText).nric,
                        citizenName: JSON.parse(xhr.responseText).citizenName,
                        citizenEmail: JSON.parse(xhr.responseText).citizenEmail,
                        citizenNumber: JSON.parse(xhr.responseText).citizenNumber,
                        citizenSalutation: JSON.parse(xhr.responseText).citizenSalutation,
                        queueNumber: JSON.parse(xhr.responseText).queueNumber,
                        generalType: JSON.parse(xhr.responseText).generalType,

                        serviceName: JSON.parse(xhr.responseText).serviceName,

                        serviceProviderEmail: JSON.parse(xhr.responseText).serviceProviderEmail,
                        serviceProviderName: JSON.parse(xhr.responseText).serviceProviderName,
                        serviceStartDate: JSON.parse(xhr.responseText).serviceStartDate,
                        serviceProviderPhone: JSON.parse(xhr.responseText).serviceProviderPhone,
                        serviceStartTime: JSON.parse(xhr.responseText).serviceStartTime,
                        serviceProviderLocation: JSON.parse(xhr.responseText).serviceProviderLocation,
                        bookingStatus: JSON.parse(xhr.responseText).bookingStatus,
                        elementNobodyInQueue: "none",
                        showCurrentCitizen: "block"
                    })


                    calledBooking = new Booking(this.state._bookingId, this.state.nric, this.state.citizenName, this.state.citizenSalutation, this.state.citizenEmail, this.state.citizenNumber, this.state.generalType, this.state.serviceName, this.state.serviceProviderName, this.state.serviceProviderEmail, this.state.serviceProviderPhone, this.state.serviceStartDate, this.state.serviceStartTime, this.state.serviceProviderLocation, this.state.bookingStatus, this.state.queueNumber);

                    document.getElementById("divCurrentCitizen")!!.style.display = "block";
                    document.getElementById("divButtonNextPatient")!!.style.display = "none";
                    calledBooking.BookingStatus = "Doctor"

                    BaseService.update<Booking>("/booking/update/", this.state._bookingId, calledBooking).then(

                        (rp) => {
                            if (rp.Status) {
                                console.log('Booking saved.');
                            } else {
                                console.log(rp.Messages);
                                console.log("Messages: " + rp.Messages);
                                console.log("Exception: " + rp.Exception);
                            }
                        }
                    );

                }

                if (buttonSelected == "sendtoNextService") {
                    this.setState({
                        showModal: true
                    });

                    calledBooking = new Booking(this.state._bookingId, this.state.nric, this.state.citizenName, this.state.citizenSalutation, this.state.citizenEmail, this.state.citizenNumber, this.state.generalType, this.state.serviceName, this.state.serviceProviderName, this.state.serviceProviderEmail, this.state.serviceProviderPhone, this.state.serviceStartDate, this.state.serviceStartTime, this.state.serviceProviderLocation, this.state.bookingStatus, this.state.queueNumber);


                    document.getElementById("divCurrentCitizen")!!.style.display = "none";
                    document.getElementById("divButtonNextPatient")!!.style.display = "block";


                    calledBooking.BookingStatus = "Payment"

                    BaseService.update<Booking>("/booking/update/", this.state._bookingId, calledBooking).then(

                        (rp) => {
                            if (rp.Status) {
                                console.log('Booking saved.');
                            } else {
                                console.log(rp.Messages);
                                console.log("Messages: " + rp.Messages);
                                console.log("Exception: " + rp.Exception);
                            }
                        }
                    );

                }



                // console.log(JSON.parse(xhr.responseText));

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


}

export default ServiceCounter;
