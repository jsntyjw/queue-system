import * as React from 'react';
import Booking from '../models/booking';
import { BookingForm } from './bookingsForm';

interface IProps {
    booking: Booking;
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

export const BookingPage: React.FunctionComponent<IProps> = (props: IProps) => {  
    return (
        <BookingForm
            booking={props.booking}
            onChange={props.onChange}
            onSave={props.onSave}
        />
    );
}
