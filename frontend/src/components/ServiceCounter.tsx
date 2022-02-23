import React from 'react';
import '../App.css';
import {
    Text,
    Button,
    Layout,
    Breadcrumb,
    BoxContainer,
    InputSelect
} from 'react-lifesg-design-system';
import styled from "styled-components";

interface Props {
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

const ServiceCounter: React.FunctionComponent<Props> = (props) => {
    return (
        <>
            <StyledSection>
                <Layout.Container>
                    <Breadcrumb links={[{ title: 'Home', url: 'http://localhost:3000/ServiceCounter' }, { title: 'Service Counter' }]} />

                    <Layout.GridContainer className="column2">
                        <div>
                            <Text.H3>Currently Serving</Text.H3>
                            <div className='spacer1'></div>
                            <div className='spacer1'></div>

                            <Button.Default className='buttonsuccess'
                                onClick={ () => consumeQueue(handle200)}
                            >Next Patient</Button.Default>

                            <div className='spacer1'></div>

                            <div >
                                <BoxContainer title="Citizen Information" collapsible={false} className="textleft" >
                                    <div style={{ padding: "2rem", minWidth: "1080px" }}>
                                        <Layout.GridContainer className="column4">
                                            <Text.Body weight="semibold">NRIC</Text.Body>
                                            <Text.Body weight="semibold">Name</Text.Body>
                                            <Text.Body weight="semibold">Phone Number</Text.Body>
                                            <Text.Body weight="semibold">Email</Text.Body>
                                            <Text.Body>nric number</Text.Body>
                                            <Text.Body>citizen Name</Text.Body>
                                            <Text.Body>citeizen phone number</Text.Body>
                                            <Text.Body>citizen email</Text.Body>
                                        </Layout.GridContainer>
                                    </div>
                                </BoxContainer>

                            </div>
                            <Text.Body>Next service: </Text.Body>


                        </div>

                    </Layout.GridContainer>


                    <Layout.GridContainer className="column4">

                        <InputSelect
                            placeholder="Select"
                            options={[
                                { value: "Payment", label: "Payment" },
                                { value: "Medication", label: "Medication" }
                            ]}
                            valueExtractor={(item) => item.value}
                            listExtractor={(item) => item.label}
                            displayValueExtractor={(item) => item.label}
                        />
                    </Layout.GridContainer>


                    <div className='spacer1'></div>


                    <Button.Default
                        onClick={props.onSave}
                    >Send to next service</Button.Default>


                </Layout.Container>
            </StyledSection>
        </>
    )
}

export default ServiceCounter;



function handle200(response) {
    console.log('handle200 has received:', response);
}

function consumeQueue(callback) {
    const xhr = new XMLHttpRequest(),
        method = "GET",
        url = "https://hyxfimzf9g.execute-api.us-east-1.amazonaws.com/default/receiver?queueName=doctorQueue";
    // initialize a new GET request
    xhr.open(method, url, true);

    // respond to every readyState change
    xhr.onreadystatechange = function () {

        // ignore all readyStates other than "DONE"
        if (xhr.readyState !== XMLHttpRequest.DONE) { return; }

        // call the callback with status
        if (xhr.status === 200) {
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