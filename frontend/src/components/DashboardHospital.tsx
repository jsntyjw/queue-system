import React from 'react';
import '../App.css';
import {
    Text,
    Button,
    Layout,
    Breadcrumb,
    Accordion,
    Banner
} from 'react-lifesg-design-system';
import styled from "styled-components";

interface Props {
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const StyledContainer = styled(Layout.GridContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "title"
        "button "
        "queue";
    grid-gap: 0.25rem;
    margin-bottom: 20px;
`;

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;


const Title = styled.div`
  grid-area: title;
  padding: 0.25rem;
`;
const Buttons = styled.div`
  grid-area: button;
  padding: 0.25rem;
`;
const Main = styled.main`
  color: white;
  grid-area: queue;
  padding: 0.25rem;
`;

interface MyState {
    callingNumberDoctorQueue: string,
    callingNumberPaymentQueue: string,
    callingNumberPharmacyQueue: string,
    upcomingNumberDoctorQueue: string,
    upcomingNumberPaymentQueue: string,
    upcomingNumberPharmacyQueue: string
}



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

        };
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 3000);
    }

    async loadData() {
        try {
            const res = await fetch(process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking');
            const blocks = await res.json();
            const data = blocks.data;

            data.forEach(element => {
                if (element.bookingStatus == 'Doctor' && element.queueNumber != null) {
                    console.log("testing here! success")
                    this.setState({
                        callingNumberDoctorQueue:element.queueNumber.toString()
                    })
                    console.log("hi" + this.state.callingNumberDoctorQueue)

                }
                if (element.bookingStatus == 'Payment' && element.queueNumber != null) {
                    this.setState({
                        callingNumberPaymentQueue:element.queueNumber.toString()
                    })
                }
                if (element.bookingStatus == 'Pharmacy' && element.queueNumber != null) {
                    this.setState({
                        callingNumberPharmacyQueue :element.queueNumber.toString()
                    })
                }


            });

           

            //   console.log(blocks.data)
        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div>

                <div className="row">
                    <div className="column rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=',
                        mobile: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto='
                    }}>
                        Doctor Queue
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 40 }}>Current Serving:</a>
                        </div>

                        {/* <h4>{this.state.callingNumber}</h4> */}


                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 100 }}>{this.state.callingNumberDoctorQueue}</b>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 40 }}>Upcoming Number:</a>
                        </div>

                        {/* <h4>{this.state.callingNumber}</h4> */}


                        <b style={{ 'color': 'orange', 'fontSize': 100 }}>{this.state.upcomingNumberDoctorQueue}</b>
                    </div>
                    <div className="column rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg',
                        mobile: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg'
                    }}>
                        Payment Queue
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 40 }}>Current Serving:</a>
                        </div>

                        {/* <h4>{this.state.callingNumber}</h4> */}


                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 100 }}>{this.state.callingNumberPaymentQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 40 }}>Upcoming Number:</a>
                        </div>

                        {/* <h4>{this.state.callingNumber}</h4> */}


                        <b style={{ 'color': 'orange', 'fontSize': 100 }}>{this.state.upcomingNumberPaymentQueue}</b>
                    </div>
                    <div className="column rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg',
                        mobile: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg '
                    }}>
                        Pharmacy Queue
                    </Banner>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 40 }}>Current Serving:</a>
                        </div>

                        {/* <h4>{this.state.callingNumber}</h4> */}


                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 100 }}>{this.state.callingNumberPharmacyQueue}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 40 }}>Upcoming Number:</a>
                        </div>

                        {/* <h4>{this.state.callingNumber}</h4> */}


                        <b style={{ 'color': 'orange', 'fontSize': 100 }}>{this.state.upcomingNumberPharmacyQueue}</b></div>
                </div>
            </div>



        )
    }

}

export default Dashboard;