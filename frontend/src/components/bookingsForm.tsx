import * as React from 'react';
import Booking from '../models/booking';

// import { Input, Button,  } from '../common/components/form';

import { Text, Form, Button, Layout, Breadcrumb } from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import '../App.css';
import '../index.css';

interface Props {
    booking: Booking;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const ModifiedText = styled(Text.H4)`
    color: #1C76D5;
    margin: 50px auto 20px auto;
`;

// const StyledContainer = styled(Layout.GridContainer)`
//     /* grid-template-rows: 1fr 1fr 1fr 1fr; */
//     grid-template-columns: 1fr;
//     grid-template-areas: 
//         "row1 row1"
//         "row2 row2"
//         "row3 row3"
//         "row4 row5"
//         "row5 row5"
//         "row6 row6"
//         "row7 row7"
//         "row8 row8"
//         "row9 row9"
//         "row10 row10"
//         "row11 row11";
//     grid-gap: 0.25rem;
//     padding: 25px;
// `;

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;


export const BookingForm: React.FunctionComponent<Props> = (props) => {
    return (
        <>
        <StyledSection>
            

            <div className='container'>
            <div className='breadcrumb'>
                <Breadcrumb links={[ { title: 'Home' , url: 'http://localhost:3000/' }, { title: 'Appointments' , url: 'http://localhost:3000/Appointments' }, { title: 'Add Appointment' } ]} />
            </div>
                <Text.H1>Add Appointment</Text.H1>
                <ModifiedText>Citizen Information</ModifiedText>
            
                    <Form.Select
                        label="Salutation"
                        placeholder="Select"
                        options={[
                            { value: "Mr", label: "Mr" },
                            { value: "Mrs", label: "Mrs" },
                            { value: "Miss", label: "Miss" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                    />
                <Form.Field
                    label="Name"
                />
             
                <Form.Field
                    label="Citizen NRIC / FIN number"
                />
          
                <Form.Field
                    label="Citizen phone number"
                />
          
                <Form.Field
                    label="Email Address"
                />
      
                <ModifiedText>Service Provider Information</ModifiedText>
          
                <Form.Select
                    label="Service Name"
                    placeholder="Select"
                    options={[
                        { value: "Idk1", label: "Idk1" },
                        { value: "Idk2", label: "Idk2" },
                        { value: "Idk3", label: "Idk3" },
                    ]}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                />
                
                
                <Form.Field
                    label="Service Provider Phone Number"
                    placeholder='Type here...'
                />
        
                <Form.Select
                    label="Service Provider"
                    placeholder="Select"
                    options={[
                        { value: "Idk1", label: "Idk1" },
                        { value: "Idk2", label: "Idk2" },
                        { value: "Idk3", label: "Idk3" },
                    ]}
                    valueExtractor={(item) => item.value}
                    listExtractor={(item) => item.label}
                    displayValueExtractor={(item) => item.label}
                />
                
                <Form.Field
                    label="Service Provider Email Address"
                    placeholder='Type here...'
                />

                <div className='form_btn'>
                    <Button.Default
                        onClick={props.onSave}
                    >Submit</Button.Default>
                </div>
            </div>
        </StyledSection>

        </>
    );
};
