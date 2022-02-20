import * as React from 'react';
import Booking from '../models/booking';

import { Input, Dropdown, DateInput, ButtonSave } from '../common/components/form';
import { Text, Form, Layout, Breadcrumb, AlertBox } from 'react-lifesg-design-system';
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
                        value={props.booking.Nric}
                        onChange={props.onChange}
                    />

                    <Input
                        name="CitizenName"
                        label="CitizenName"
                        defaultValue=''

                        value={props.booking.CitizenName}
                        onChange={props.onChange}
                    />

                    <Dropdown
                        name="CitizenSalutation"
                        label="CitizenSalutation"
                        value={props.booking.CitizenSalutation}
                        onChange={props.onChange} options={["Mr", "Mrs", "Miss"]} />



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


                    <Dropdown
                        name="ServiceName"
                        label="ServiceName"
                        options={["Psychology", "Ophthalmologist"]}
                        value={props.booking.ServiceName}
                        onChange={props.onChange}
                    />

                    <Dropdown
                        name="ServiceProviderName"
                        label="ServiceProviderName"
                        options={["National Polyclinic"]}
                        value={props.booking.ServiceProviderName}
                        onChange={props.onChange}
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

                    <DateInput
                        name="ServiceStartDateTime"
                        label="ServiceStartDateTime"
                        value={props.booking.ServiceStartDateTime

                        }
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

