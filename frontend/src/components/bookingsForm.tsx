import * as React from 'react';
import Booking from '../models/booking';

// import { Input, Button,  } from '../common/components/form';

import { Text, Form, Button, Layout } from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

interface Props {
    booking: Booking;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const ModifiedText = styled(Text.H6)`
    color: #1C76D5;
`;

const StyledContainer = styled(Layout.GridContainer)`
    grid-template-rows: 1fr 1fr 2fr 0fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "row1 row1"
        "row2 row2"
        "row3 row3";
    grid-gap: 0.25rem;
    padding: 25px;
`;


const Row1 = styled.div`
  grid-area: row1;
  padding: 0.25rem;
`;
const Row2 = styled.div`
  grid-area: row2;
  padding: 0.25rem;
`;
const Row3 = styled.div`
  color: white;
  grid-area: row3;
  padding: 0.25rem;
`;


export const BookingForm: React.FunctionComponent<Props> = (props) => {
    return (
        <>
        <Layout.Section>
            <StyledContainer>
                <Text.H3>Add Appointment</Text.H3>
                <ModifiedText>Citizen Information</ModifiedText>
                <Row1>
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
                        </Row1>
          <Row2>
                        <Form.Field
                            label="Citizen NRIC / FIN number"
                        />
              

                        <Form.Field
                            label="Citizen phone number"
                        />
            </Row2>
                        <Row3>
                        <Form.Field
                            label="Email Address"
                        />
                </Row3>


                
            </StyledContainer>

            
            <StyledContainer>
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

                <Button.Default
                    onClick={props.onSave}
                >Add</Button.Default>
            </StyledContainer>

        </Layout.Section>

        </>




    );
};
