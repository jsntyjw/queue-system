import * as React from 'react';
import Booking from '../models/booking';

// import { Input, Button,  } from '../common/components/form';

import { Text, Form, Color, Button, Layout } from 'react-lifesg-design-system'
import { ThemeProvider, } from "styled-components";
import { Container, useTheme } from '@material-ui/core';

interface Props {
    booking: Booking;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const BookingForm: React.FunctionComponent<Props> = (props) => {
    return (


        <div>


        <Container>



            <h1>Create booking</h1>
            <h4 style={{ color: "#1C76D5" }}>Citizen Information</h4>
            <div className="float-container">
                <div className="float-child">
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
                </div>



                <div className="float-child">

                    <Form.Field
                        label="Name"
                    />

                </div>

            </div>

            <div className="float-container">

                <div className="float-child">


                    <Form.Field
                        label="Citizen NRIC / FIN number"
                    />

                </div>


                <div className="float-child">

                    <Form.Field
                        label="Citizen phone number"
                    />

                </div>

            </div>


            <div className="float-container">
                <div className="float-child">

                    <Form.Field
                        label="Email Address"
                    />

                </div>

                <div className="float-container">
                    <div className="float-child">

                    </div>

                </div>

            </div>

            </Container>


    
            <h4 style={{ color: "#1C76D5" }}>Service Provider Information  </h4>


            <div className="float-container">
                <div className="float-child">

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

                </div>
                <div className="float-child">

                    <Form.Field
                        label="Service Provider Phone Number"
                        placeholder='Type here...'
                    />

                </div>

            </div>

            <div className="float-container">

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

            </div>


            <div className="float-container">

                <Form.Field
                    label="Service Provider Email Address"
                    placeholder='Type here...'
                />

            </div>

            <Button.Default
                onClick={props.onSave}
            >Add</Button.Default>


    
</div>






    );
};
