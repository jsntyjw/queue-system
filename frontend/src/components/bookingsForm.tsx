import * as React from 'react';
import Booking from '../models/booking';

import { Input, Button } from '../common/components/form';

interface Props {
    booking: Booking;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const BookingForm: React.FunctionComponent<Props> = (props) => { 
    return (
        <form>
            <h1>Create booking</h1>

            <Input
                name="Nric"
                label="Nric"
                value={props.booking.Nric}
                onChange={props.onChange}
            />

            <Input
                name="CitizenName"
                label="CitizenName"
                value={props.booking.CitizenName}
                onChange={props.onChange}
            />

            <Input
                name="CitizenSalutation"
                label="CitizenSalutation"
                value={props.booking.CitizenSalutation}
                onChange={props.onChange}
            />

            <Input
                name="CitizenEmail"
                label="CitizenEmail"
                value={props.booking.CitizenEmail}
                onChange={props.onChange}
            />

            <Input
                name="CitizenNumber"
                label="CitizenNumber"
                value={props.booking.CitizenNumber}
                onChange={props.onChange}
            />

            <Input
                name="ServiceName"
                label="ServiceName"
                value={props.booking.ServiceName}
                onChange={props.onChange}
            />

            <Input
                name="ServiceProviderName"
                label="ServiceProviderName"
                value={props.booking.ServiceProviderName}
                onChange={props.onChange}
            />

            <Input
                name="ServiceProviderEmail"
                label="ServiceProviderEmail"
                value={props.booking.ServiceProviderEmail}
                onChange={props.onChange}
            />

            <Input
                name="ServiceProviderPhone"
                label="ServiceProviderPhone"
                value={props.booking.ServiceProviderPhone}
                onChange={props.onChange}
            />

            <Input
                name="ServiceStartDateTime"
                label="ServiceStartDateTime"
                value={props.booking.ServiceStartDateTime}
                onChange={props.onChange}
            />

            <Input
                name="ServiceEndDateTime"
                label="ServiceEndDateTime"
                value={props.booking.ServiceEndDateTime}
                onChange={props.onChange}
            />

            <Input
                name="BookingCreationDate"
                label="BookingCreationDate"
                value={props.booking.BookingCreationDate}
                onChange={props.onChange}
            />


            <Input
                name="BookingLocation"
                label="BookingLocation"
                value={props.booking.BookingLocation}
                onChange={props.onChange}
            />


            <Input
                name="BookingDescription"
                label="BookingDescription"
                value={props.booking.BookingDescription}
                onChange={props.onChange}
            />


            <Input
                name="BookingReference"
                label="BookingReference"
                value={props.booking.BookingReference}
                onChange={props.onChange}
            />

            <Input
                name="BookingStatus"
                label="BookingStatus"
                value={props.booking.BookingStatus}
                onChange={props.onChange}
            />

            <Input
                name="DynamicFields"
                label="DynamicFields"
                value={props.booking.DynamicFields}
                onChange={props.onChange}
            />

            <Button
                label="Save"
                className="btn btn-success mt-2"
                onClick={props.onSave}
            />
        </form>
    );
};
