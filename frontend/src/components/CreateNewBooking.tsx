import React from 'react';
import * as toastr from 'toastr';
import Booking from '../models/booking';
import BaseService from '../service/base.service';
import { BookingPage } from './displayBookingForm';
 


interface IProps { 
    history: History;
    //Map properties match
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


export default class Create extends  React.Component<IProps, IState> {
    constructor(props:IProps) {
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
                ServiceStartTime : '',
                ServiceProviderLocation : '',
                BookingStatus : 'New',
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
    private onSave = () => { 
        BaseService.create<Booking>("/booking/create", this.state.booking).then(
            (rp) => {
                if (rp.Status) {
                    toastr.success('Booking saved.'); 


                    this.setState({
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
                            ServiceStartTime : '',

                            ServiceProviderLocation : '',
                            BookingStatus : 'New',
                            Id: '',
                        }
                    });
                     
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