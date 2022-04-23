import React from 'react';
import '../App.css';
import {
    Banner, Layout
} from 'react-lifesg-design-system';
import styled from "styled-components";

const StyledSection = styled(Layout.Section)`
    min-height: 700px;
`;


interface MyState {
    callingNumberDoctorQueue: string,
    callingNumberPaymentQueue: string,
    callingNumberPharmacyQueue: string,
    upcomingNumberDoctorQueue: string,
    upcomingNumberPaymentQueue: string,
    upcomingNumberPharmacyQueue: string,
    MissedNumberDoctorQueue: string,
    MissedNumberPaymentQueue: string,
    MissedNumberPharmacyQueue: string
}

var numberInQueueArrayDoctor: string[] = [];
var numberInQueueArrayPayment: string[] = [];
var numberInQueueArrayPharmacy: string[] = [];

var numberMissedArrayDoctor: string[] = [];
var numberMissedArrayPayment: string[] = [];
var numberMissedArrayPharmacy: string[] = [];


class Dashboard extends React.Component<{}, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            callingNumberDoctorQueue: '-',
            callingNumberPaymentQueue:  '-',
            callingNumberPharmacyQueue: '-',
            upcomingNumberDoctorQueue:  '-',
            upcomingNumberPaymentQueue:  '-',
            upcomingNumberPharmacyQueue:  '-',
            MissedNumberDoctorQueue: '-',
            MissedNumberPaymentQueue: '-',
            MissedNumberPharmacyQueue: '-'
        };
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 1000);
    }

    async loadData() {

       

        try {
            const res = await fetch(process.env.REACT_APP_APPOINTMENT_API_ADDRESS + 'api/booking');
            const blocks = await res.json();
            const data = blocks.data;

            var doctorIsCalling = false;
            var paymentIsCalling = false;
            var pharmacyIsCalling = false;
            var pharmacyMissingDisplay = false;
            var paymentMissingDisplay = false;
            var doctorMissingDisplay = false;
            var doctorQueueingDisplay = false;
            var pharmacyQueueingDisplay = false;
            var paymentQueueingDisplay = false;

            if(doctorIsCalling== false){
                this.setState({
                    callingNumberDoctorQueue: '-'
                })
            }

            if(paymentIsCalling== false){
                this.setState({
                    callingNumberPaymentQueue: '-'
                })
            }

            if(pharmacyIsCalling== false){
                this.setState({
                    callingNumberPharmacyQueue: '-'
                })
            }
            if(pharmacyMissingDisplay== false){
                this.setState({
                    MissedNumberPharmacyQueue: '-'
                })
            }

            if(paymentMissingDisplay== false){
                this.setState({
                    MissedNumberPaymentQueue: '-'
                })
            }

            if(doctorMissingDisplay== false){
                this.setState({
                    MissedNumberDoctorQueue: '-'
                })
            }
            if(doctorQueueingDisplay== false){
                this.setState({
                    upcomingNumberDoctorQueue: '-'
                })
            }

            if(pharmacyQueueingDisplay== false){
                this.setState({
                    upcomingNumberPharmacyQueue: '-'
                })
            }

            if(paymentQueueingDisplay== false){
                this.setState({
                    upcomingNumberPaymentQueue: '-'
                })
            }

            numberInQueueArrayDoctor.length = 0
            numberInQueueArrayPayment.length = 0
            numberInQueueArrayPharmacy.length = 0

            numberMissedArrayDoctor.length = 0
            numberMissedArrayPayment.length = 0
            numberMissedArrayPharmacy.length = 0

            

            data.forEach(element => {
                if (element.bookingStatus == 'Doctor-Calling' ) {
                    this.setState({
                        callingNumberDoctorQueue:element.queueNumber.toString()
                    })
                    doctorIsCalling = true;
                }
                if (element.bookingStatus == 'Payment-Calling' ) {
                    this.setState({
                        callingNumberPaymentQueue:element.queueNumber.toString()
                    })
                    paymentIsCalling = true;
                }
                if (element.bookingStatus == 'Pharmacy-Calling' ) {
                    this.setState({
                        callingNumberPharmacyQueue :element.queueNumber.toString()
                    })
                    pharmacyIsCalling = true;
                }

                if (element.bookingStatus == 'Pharmacy-Queued' ) {
                    pharmacyQueueingDisplay = true;
                    numberInQueueArrayPharmacy.push(element.queueNumber.toString())
                }
                if (element.bookingStatus == 'Payment-Queued' ) {
                    paymentQueueingDisplay = true;
                    numberInQueueArrayPayment.push(element.queueNumber.toString())
                }
                if (element.bookingStatus == 'Doctor-Queued' ) {
                    doctorQueueingDisplay = true;
                    numberInQueueArrayDoctor.push(element.queueNumber.toString())
                }
                
                if (element.bookingStatus == 'Pharmacy-Missed' ) {
                    pharmacyMissingDisplay = true;
                    numberMissedArrayPharmacy.push(element.queueNumber.toString())
                }
                if (element.bookingStatus == 'Payment-Missed') {
                    paymentMissingDisplay = true;
                    numberMissedArrayPayment.push(element.queueNumber.toString())
                }
                if (element.bookingStatus == 'Doctor-Missed' ) {
                    doctorMissingDisplay = true;
                    numberMissedArrayDoctor.push(element.queueNumber.toString())
                }


                if(numberInQueueArrayDoctor.length != 0 &&  doctorQueueingDisplay == true){
                    this.setState({
                        upcomingNumberDoctorQueue: numberInQueueArrayDoctor[0]
                    })
                }
                if(numberInQueueArrayPayment.length != 0 &&  paymentQueueingDisplay == true){
                    this.setState({
                        upcomingNumberPaymentQueue: numberInQueueArrayPayment[0]
                    })
                }
                if(numberInQueueArrayPharmacy.length != 0 &&  pharmacyQueueingDisplay == true ){
                    this.setState({
                        upcomingNumberPharmacyQueue: numberInQueueArrayPharmacy[0]
                    })
                }


                if(numberMissedArrayDoctor.length != 0  &&  doctorMissingDisplay == true){
                    this.setState({
                        MissedNumberDoctorQueue: numberMissedArrayDoctor[0]
                    })
                }
                if(numberMissedArrayPayment.length != 0   &&  paymentMissingDisplay == true){
                    this.setState({
                        MissedNumberPaymentQueue: numberMissedArrayPayment[0]
                    })
                }
                if(numberMissedArrayPharmacy.length != 0 &&  pharmacyMissingDisplay == true){
                    this.setState({
                        MissedNumberPharmacyQueue: numberMissedArrayPharmacy[0]
                    })
                }

          



            });

        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <StyledSection>
            <div>

                <div className="row">
                    <div className="column rcorner"  style={{ 'zIndex': '-1' }}><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=',
                        mobile: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto='
                    }}>
                        <span style={{ 'margin': 'auto' }}>Doctor</span>
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Current Serving:</a>
                        </div>

                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 80 }}>{this.state.callingNumberDoctorQueue}</b>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 80 }}>{this.state.upcomingNumberDoctorQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Missed Queue:</a>
                        </div>

                        <b style={{ 'color': 'red', 'fontSize': 80 }}>{this.state.MissedNumberDoctorQueue}</b>
                    </div>
                    <div className="column rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg',
                        mobile: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg'
                    }}>
                        <span style={{ 'margin': 'auto' }}>Payment</span>
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Current Serving:</a>
                        </div>

                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 80 }}>{this.state.callingNumberPaymentQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 80 }}>{this.state.upcomingNumberPaymentQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Missed Queue:</a>
                        </div>

                        <b style={{ 'color': 'red', 'fontSize': 80 }}>{this.state.MissedNumberPaymentQueue}</b>
                    </div>
                    <div className="column rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg',
                        mobile: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg '
                    }}>
                        <span style={{ 'margin': 'auto' }}>Pharmacy</span>
                    </Banner>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Current Serving:</a>
                        </div>



                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 80 }}>{this.state.callingNumberPharmacyQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 80 }}>{this.state.upcomingNumberPharmacyQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Missed Queue:</a>
                        </div>

                        <b style={{ 'color': 'red', 'fontSize': 80 }}>{this.state.MissedNumberPharmacyQueue}</b>
                    </div>
                </div>
            </div>
            </StyledSection>
        )
    }

}

export default Dashboard;