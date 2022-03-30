import React from 'react';
import '../App.css';
import { Banner, Layout } from 'react-lifesg-design-system';
import styled from "styled-components";

const StyledSection = styled(Layout.Section)`
    min-height: 700px;
`;


interface MyState {
    callingQueueNumberCommunityHealth: string,
    callingQueueNumberWorkplaceHealth: string,
    upcomingQueueNumberCommunityHealth: string,
    upcomingQueuenumberWorkplaceHealth: string,
    MissedNumberCommunityHealth: string,
    MissedNumberWorkplaceHealth: string
}


var numberInQueueArrayCommunityHealth: string[] = [];
var numberInQueueArrayWorkplaceHealth: string[] = [];

var numberMissedArrayCommunityHealth: string[] = [];
var numberMissedArrayWorkplaceHealth: string[] = [];

class Dashboard extends React.Component<{}, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            callingQueueNumberCommunityHealth: '-',
            callingQueueNumberWorkplaceHealth: '-',
            upcomingQueueNumberCommunityHealth: '-',
            upcomingQueuenumberWorkplaceHealth: '-',
            MissedNumberCommunityHealth: '-',
            MissedNumberWorkplaceHealth: '-'
        };
        this.loadData = this.loadData.bind(this)
    }

    componentDidMount() {
        this.loadData();
        setInterval(this.loadData, 3000);
    }

    async loadData() {


        try {
            const res = await fetch(process.env.REACT_APP_APPOINTMENT_API_ADDRESS + 'api/booking');
            const blocks = await res.json();
            const data = blocks.data;

            var communityHealthIsCalling = false;
            var workplaceHealthIsCalling = false;

            var communityHealthMissingDisplay = false;
            var workplaceHealthMissingDisplay = false;

            var communityHealthQueueingDisplay = false;
            var workplaceHealthQueueingDisplay = false;

            if(communityHealthIsCalling== false){
                this.setState({
                    callingQueueNumberCommunityHealth: '-'
                })
            }

            if(workplaceHealthIsCalling== false){
                this.setState({
                    callingQueueNumberWorkplaceHealth: '-'
                })
            }
            if(communityHealthMissingDisplay== false){
                this.setState({
                    MissedNumberCommunityHealth: '-'
                })
            }

            if(workplaceHealthMissingDisplay== false){
                this.setState({
                    MissedNumberWorkplaceHealth: '-'
                })
            }
            if(communityHealthQueueingDisplay== false){
                this.setState({
                    upcomingQueueNumberCommunityHealth: '-'
                })
            }

            if(workplaceHealthQueueingDisplay== false){
                this.setState({
                    upcomingQueuenumberWorkplaceHealth: '-'
                })
            }

        numberInQueueArrayCommunityHealth.length = 0
        numberInQueueArrayWorkplaceHealth.length = 0

        numberMissedArrayCommunityHealth.length = 0
        numberMissedArrayWorkplaceHealth.length = 0

            data.forEach(element => {
                console.log(element)
                if (element.bookingStatus == 'communityHealth-Calling' ) {
                    this.setState({
                        callingQueueNumberCommunityHealth: element.queueNumber.toString()
                    })
                }
                if (element.bookingStatus == 'workplaceHealth-Calling' ) {
                    this.setState({
                        callingQueueNumberWorkplaceHealth: element.queueNumber.toString()
                    })
                }



                if (element.bookingStatus == 'communityHealth-Queued' ) {
                    communityHealthQueueingDisplay = true;
                    numberInQueueArrayCommunityHealth.push(element.queueNumber.toString())
                }
                if (element.bookingStatus == 'workplaceHealth-Queued' ) {
                    workplaceHealthQueueingDisplay = true;
                    numberInQueueArrayWorkplaceHealth.push(element.queueNumber.toString())
                }
               
                
                if (element.bookingStatus == 'communityHealth-Missed' ) {
                    console.log(element.queueNumber.toString())
                    communityHealthMissingDisplay = true;
                    numberMissedArrayCommunityHealth.push(element.queueNumber.toString())
                }
                if (element.bookingStatus == 'workplaceHealth-Missed' ) {
                    workplaceHealthMissingDisplay = true;
                    numberMissedArrayWorkplaceHealth.push(element.queueNumber.toString())
                }
       


           
  


                if(numberInQueueArrayCommunityHealth.length != 0 && communityHealthQueueingDisplay == true){
                    this.setState({
                        upcomingQueueNumberCommunityHealth: numberInQueueArrayCommunityHealth[0]
                    })
                }
                if(numberInQueueArrayWorkplaceHealth.length != 0 && workplaceHealthQueueingDisplay == true ){
                    this.setState({
                        upcomingQueuenumberWorkplaceHealth: numberInQueueArrayWorkplaceHealth[0]
                    })
                }
                if(numberMissedArrayCommunityHealth.length != 0 && communityHealthMissingDisplay == true){
                    this.setState({
                        MissedNumberCommunityHealth: numberMissedArrayCommunityHealth[0]
                    })
                }
                if(numberMissedArrayWorkplaceHealth.length != 0 && workplaceHealthMissingDisplay == true){
                    this.setState({
                        MissedNumberWorkplaceHealth: numberMissedArrayWorkplaceHealth[0]
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
                    <div className="columnHalf rcorner" style={{ 'zIndex': '-1' }}><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=',
                        mobile: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto='
                    }}>
                        <span style={{ 'margin': 'auto' }}>CommunityHealth</span>
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Current Serving:</a>
                        </div>
                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 80 }}>{this.state.callingQueueNumberCommunityHealth}</b>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 80 }}>{this.state.upcomingQueueNumberCommunityHealth}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Missed Queue:</a>
                        </div>

                        <b style={{ 'color': 'red', 'fontSize': 80 }}>{this.state.MissedNumberCommunityHealth}</b>
                    </div>
                    <div className="columnHalf rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg',
                        mobile: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg'
                    }}>
                        <span style={{ 'margin': 'auto' }}>WorkplaceHealth</span>
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Current Serving:</a>
                        </div>
                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 80 }}>{this.state.callingQueueNumberWorkplaceHealth}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 80 }}>{this.state.upcomingQueuenumberWorkplaceHealth}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 18 }}>Missed Queue:</a>
                        </div>

                        <b style={{ 'color': 'red', 'fontSize': 80 }}>{this.state.MissedNumberWorkplaceHealth}</b>
                    </div>

                </div>
            </div>
            </StyledSection>
        )
    }

}

export default Dashboard;