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

import { ModalContent } from "../models/doc-elements";


interface Props {
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

interface MyState {
    _bookingId : string,
    nric: string,
    name: string,
    phone: string,
    email: string,
    inputValue : string
    showModal: boolean

}



class ServiceCounter extends React.Component<{}, MyState> {
    constructor(props) {
        super(props);
        this.state = {
            _bookingId: "",
            nric: "",
            name: "",
            phone: "",
            email: "",
            inputValue: "",
            showModal: false

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

                    <div id='divButtonNextPatient'>


                        <Button.Default className='buttonsuccess'
                            onClick={() => this.consumeQueue(this.handle200, "nextPatient")}
                        >Next Patient</Button.Default>

                    </div>
                    <div id='divCurrentCitizen' style={{ display: 'none' }}>

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
                                            <Text.Body>{this.state.name}</Text.Body>
                                            <Text.Body>{this.state.phone}</Text.Body>
                                            <Text.Body>{this.state.email}</Text.Body>
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
                                        inputValue : selectedValue
                                    })
                                }} 
                            />
                        </Layout.GridContainer>


                        <div className='spacer1'></div>


                        <Button.Default
                            onClick={() => this.consumeQueue(this.handle200, "sendtoNextService", this.state._bookingId, this.state.nric, this.state.name, this.state.email, this.state.phone)}
                            
                        >Send to next service</Button.Default>

                    </div>

                </Layout.Container>
            </StyledSection>
        )
    }


     handle200(response) {
        console.log('handle200 has received:', response);
    }

    
    
     consumeQueue(callback, buttonSelected: string, bookingId?: string, nric?: string, citizenName?: string, citizenEmail?: string, citizenNumber?: string) {
    
        var respectiveURL = ""
        if (buttonSelected == "nextPatient") {
            document.getElementById("divCurrentCitizen")!!.style.display = "block";
            document.getElementById("divButtonNextPatient")!!.style.display = "none";
            respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/receiver?queueName=doctorQueue"

        }
        else {
    
            const queueObject = {
                "_id" :bookingId,
                "nric": nric,
                "citizenName": citizenName,
                "citizenEmail": citizenEmail,
                "citizenNumber": citizenNumber
            }
    
            var myJSON = encodeURI(JSON.stringify(queueObject));

            console.log("---------------")
            console.log(queueObject)
            document.getElementById("divCurrentCitizen")!!.style.display = "none";
            document.getElementById("divButtonNextPatient")!!.style.display = "block";
            respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/sender?bookingID=" + bookingId + "&exchangeID=hospital&bindingKey=" + this.state.inputValue+"&bookingDetails=" + myJSON;
            // respectiveURL = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/receiver?queueName=" + this.state.inputValue
            // console.log(respectiveURL + "--------------")
        }
    
    
    
        const xhr = new XMLHttpRequest(),
            method = "GET",
            url = respectiveURL;
        // initialize a new GET request
        xhr.open(method, url, true);
    
        // respond to every readyState change
        xhr.onreadystatechange = () => {
    
            // ignore all readyStates other than "DONE"
            if (xhr.readyState !== XMLHttpRequest.DONE) { return; }
    
            // call the callback with status
            if (xhr.status === 200) {
                if (buttonSelected == "nextPatient") {
                    this.setState({
                        _bookingId : JSON.parse(xhr.responseText)._bookingId ,
                        nric:  JSON.parse(xhr.responseText).nric,
                        name: JSON.parse(xhr.responseText).citizenName,
                        phone: JSON.parse(xhr.responseText).citizenNumber,
                        email: JSON.parse(xhr.responseText).citizenEmail

                    })
                }
                
                if(buttonSelected == "sendtoNextService"){
                    this.setState({
                        showModal: true
                    });
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









// function foundResult(_id: any, nric: any, phone: any, email: any, name: any)  {
//      queueObject = {
//         "_id" :_id,
//         "nric":nric,
//         "citizenName":name,
//         "citizenEmail":email,
//         "citizenNumber":phone
//     }

//     console.log(queueObject)
// }

