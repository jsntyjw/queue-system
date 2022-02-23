import React from 'react';
import * as toastr from 'toastr';
import Booking from '../models/booking';
import BaseService from '../service/base.service';
import { History } from 'history';
import { BookingPage } from './displayBookingForm'; 


interface IProps { 
    history: History;
    match:{ 
        isExact: boolean
        params: {
            id:string
        },
        path: string,
        url: string,
    }
}
interface IState {
    booking: Booking
}


export default class Edit extends React.Component<IProps, IState> {

    constructor(props: IProps) {

        super(props);

        this.state = {
            booking: {
  
                Nric : '',
                CitizenName : '',
                CitizenSalutation : '',
                CitizenEmail : '',
                CitizenNumber : '',

                ServiceName : '',
                ServiceProviderName : '',
                ServiceProviderEmail : '',
                ServiceProviderPhone : '',
                ServiceStartDate : '',
                ServiceStartTime :'',
                ServiceProviderLocation : '',

                BookingStatus : '',

                Id: ''
            }
        }
        this.onFieldValueChange = this.onFieldValueChange.bind(this);

    }




    private onFieldValueChange(fieldName: string, value: string) { 
        const nextState = {
            ...this.state,
            booking: {
                ...this.state.booking,
                [fieldName]: value,
            }
        };

        this.setState(nextState);
    }

    public componentDidMount() { 
        BaseService.get<Booking>('/booking/edit/', this.props.match.params.id).then(
            (rp) => {
                if (rp.Status) {
                    const booking = rp.Data;
                    this.setState({ booking: new Booking(
                        booking._id, 
                        booking.nric,
                        booking.citizenName, 
                        booking.citizenSalutation, 
                        booking.citizenEmail,
                        booking.citizenNumber,

                        booking.serviceName, 
                        booking.serviceProviderName, 
                        booking.serviceProviderEmail,
                        booking.serviceProviderPhone,
                        booking.serviceStartDate,
                        booking.serviceStartTime, 
                        booking.serviceProviderLocation,

                        booking.bookingStatus
                        
                        )});
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }

        );
    }


    private onSave = () => {

        console.log(this.state.booking);
        BaseService.update<Booking>("/booking/update/", this.props.match.params.id,this.state.booking).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Booking saved.');
                    this.props.history.back();
                } else {
                    toastr.error(rp.Messages);
                    console.log("Messages: " + rp.Messages);
                    console.log("Exception: " + rp.Exception);
                }
            }
        );

    }
 
    render() {
        return (
            <BookingPage
                booking={this.state.booking}
                onChange={this.onFieldValueChange}
                onSave={this.onSave}
            />
        );
    }
}