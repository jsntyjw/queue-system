import React from 'react';
import '../App.css';
import { Banner } from 'react-lifesg-design-system';

interface MyState {
    callingQueueNumberCommunityHealth: string,
    callingQueueNumberWorkplaceHealth: string,
    upcomingQueueNumberCommunityHealth: string,
    upcomingQueuenumberWorkplaceHealth: string
}

class Dashboard extends React.Component<{}, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            callingQueueNumberCommunityHealth: '-',
            callingQueueNumberWorkplaceHealth: '-',
            upcomingQueueNumberCommunityHealth: '-',
            upcomingQueuenumberWorkplaceHealth: '-',
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
                console.log(element)
                if (element.bookingStatus == 'communityHealth' && element.queueNumber != null) {
                    this.setState({
                        callingQueueNumberCommunityHealth: element.queueNumber.toString()
                    })
                }
                if (element.bookingStatus == 'workplaceHealth' && element.queueNumber != null) {
                    this.setState({
                        callingQueueNumberWorkplaceHealth: element.queueNumber.toString()
                    })
                }
            });

        } catch (e) {
            console.log(e);
        }
    }


    render() {
        return (
            <div>

                <div className="row">
                    <div className="columnHalf rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=',
                        mobile: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto='
                    }}>
                        CommunityHealth Queue
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 60 }}>Current Serving:</a>
                        </div>
                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 120 }}>{this.state.callingQueueNumberCommunityHealth}</b>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 60 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 120 }}>{this.state.upcomingQueueNumberCommunityHealth}</b>
                    </div>
                    <div className="columnHalf rcorner"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg',
                        mobile: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg'
                    }}>
                        WorkplaceHealth Queue
                    </Banner>
                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 60 }}>Current Serving:</a>
                        </div>
                        <b style={{ 'color': 'lightgreen', 'margin': 0, 'fontSize': 120 }}>{this.state.callingQueueNumberWorkplaceHealth}</b>

                        <div>
                            <a style={{ 'color': 'grey', 'fontSize': 60 }}>Upcoming Number:</a>
                        </div>

                        <b style={{ 'color': 'orange', 'fontSize': 120 }}>{this.state.upcomingQueuenumberWorkplaceHealth}</b>
                    </div>

                </div>
            </div>

        )
    }

}

export default Dashboard;