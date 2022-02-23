import * as React from 'react';
import Booking from '../models/booking';

import { Input, ButtonSave } from '../common/components/form';
import { Text, Form, Layout, Breadcrumb } from 'react-lifesg-design-system';
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

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

export const BookingForm: React.FunctionComponent<Props> = (props) => {
    return (

        <StyledSection>
            <Layout.Container>
                <Breadcrumb links={[{ title: 'Home', url: 'http://localhost:3000/' }, { title: 'Appointments', url: 'http://localhost:3000/Appointments' }, { title: 'Add Appointment' }]} />
                <Text.H1>Add Appointment</Text.H1>
                <ModifiedText>Citizen Information</ModifiedText>
                <form>

                    <Input
                        name="Nric"
                        label="Nric"
                        defaultValue=''
                        onChange={props.onChange}
                        value={props.booking.Nric}
                    />

                    <Input
                        name="CitizenName"
                        label="CitizenName"
                        defaultValue=''

                        value={props.booking.CitizenName}
                        onChange={props.onChange}
                    />


                    <Form.Select
                        label="Salutation"
                        placeholder="Select"
                        options={[
                            { value: "Miss", label: "Miss" },
                            { value: "Mrs", label: "Mrs" },
                            { value: "Mr", label: "Mr" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectItem={(item, value) => {
                            props.booking.ServiceProviderName = value
                        }}
                    />



                    <Input
                        name="CitizenEmail"
                        label="CitizenEmail"
                        defaultValue=''

                        value={props.booking.CitizenEmail}
                        onChange={props.onChange}
                    />

                    <Input
                        name="CitizenNumber"
                        defaultValue=''
                        label="CitizenNumber"
                        value={props.booking.CitizenNumber}
                        onChange={props.onChange}
                    />

                    <ModifiedText>Service Provider Information</ModifiedText>

                    <Form.Select
                        label="Service"
                        placeholder="Select"

                        options={[
                            { value: "Psychology", label: "Psychology" },
                            { value: "Ophthalmologist", label: "Ophthalmologist" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectItem={(item, value) => {
                            props.booking.ServiceName = value
                        }}
                    />
                    <Form.Select
                        label="Service Provider Name"
                        placeholder="Select"

                        options={[
                            { value: "National Polyclinic", label: "National Polyclinic" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectItem={(item, value) => {
                            props.booking.ServiceProviderName = value

                        }}
                    />



                    <Input
                        name="ServiceProviderEmail"
                        label="ServiceProviderEmail"
                        defaultValue="nationalPolyclinic@gov.sg.com"
                        value={props.booking.ServiceProviderEmail}
                        onChange={props.onChange}
                    />

                    <Input
                        name="ServiceProviderPhone"
                        defaultValue=''
                        label="ServiceProviderPhone"
                        value={props.booking.ServiceProviderPhone}
                        onChange={props.onChange}
                    />

                    <Form.DateInput label="Date"
                        onChange={(value) => {
                            props.booking.ServiceStartDate = value
                        }

                        }
                    />

                    <Form.Select
                        label="Service Time"
                        placeholder="Select"

                        options={[
                            { value: "9:00 AM", label: "9:00 AM" },
                            { value: "10:00 AM", label: "10:00 AM" },
                            { value: "11:00 AM", label: "11:00 AM" },
                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectItem={(item, value) => {
                            props.booking.ServiceStartTime = value
                        }}
                    />


                    <Form.Select
                        label="Service Provider Location"
                        placeholder="Select"

                        options={[
                            { value: "Tampines", label: "Tampines" },
                            { value: "Woodlands", label: "Woodlands" },
                            { value: "Toa Payoh", label: "Toa Payoh" },
                            { value: "Punggol", label: "Punggol" },


                        ]}
                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}
                        displayValueExtractor={(item) => item.label}
                        onSelectItem={(item, value) => {
                            props.booking.ServiceProviderLocation = value

                        }}
                    />

                    <Input
                        name="BookingStatus"
                        defaultValue='New'
                        disabled
                        placeholder='New'
                        label="BookingStatus"
                        value={props.booking.BookingStatus}
                        onChange={props.onChange}
                    />

                    <ButtonSave
                        className="btn btn-success mt-2"
                        onClick={props.onSave} label={'Save'}

                    ></ButtonSave>
                </form>

            </Layout.Container>
        </StyledSection>


    );
};

