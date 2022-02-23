import * as React from 'react';
import {Layout, Text, Button, Icon, BoxContainer} from "react-lifesg-design-system";
import '../index.css';

interface IProps {
}
interface IState {
}

class BookingFound extends React.Component<IProps, IState> {

    public render(): React.ReactNode {
        return (
            <Layout.Content className="center">
                <div className="content"> 
                    {/* <div className="spacer3"></div> */}
                    <Text.H2>Booking Found</Text.H2>
                    <Icon type="check" className="checkicon"/>
                    
                    <div className="spacer1"></div>
                    <BoxContainer title="Citizen Information" collapsible={false} className="textleft">
                        <div style={{padding: "2rem", minWidth: "1080px"}}>
                            <Layout.GridContainer className="column4">
                                <Text.Body weight="semibold">NRIC</Text.Body>
                                <Text.Body weight="semibold">Salutation/Name</Text.Body>
                                <Text.Body weight="semibold">Phone Number</Text.Body>
                                <Text.Body weight="semibold">Email</Text.Body>
                                <Text.Body>S****567D</Text.Body> {/* Service Provider  */}
                                <Text.Body>Mr. Mehraj Shaik Pasha</Text.Body> {/* Service Name  */}
                                <Text.Body>mehraj999@gmail.com</Text.Body> {/* Service Provider Email  */}
                                <Text.Body>+(65) 92379395</Text.Body> {/* Email  */}
                            </Layout.GridContainer>
                        </div>
                    </BoxContainer>

                    <BoxContainer title="Booking Information" collapsible={false} className="textleft">
                        <div style={{padding: "2rem", width: "1080px"}}>
                            <Layout.GridContainer className="column4">
                                <Text.Body weight="semibold">Booking ID</Text.Body>
                                <Text.Body weight="semibold">Status</Text.Body>
                                <Text.Body weight="semibold">Date</Text.Body>
                                <Text.Body weight="semibold">Time</Text.Body>
                                <Text.Body>2148</Text.Body> {/* Booking ID  */}
                                <Text.Body>Accepted</Text.Body> {/* Booking Status  */}
                                <Text.Body>Jan 12 2022, Wednesday</Text.Body> {/* Booking Date  */}
                                <Text.Body>14:00:00</Text.Body> {/* Booking Time  */}
                                <div className="spacer2"></div>
                                <div className="spacer2"></div>
                                <div className="spacer2"></div>
                                <div className="spacer2"></div>
                                <Text.Body weight="semibold">Service Provider</Text.Body>
                                <Text.Body weight="semibold">Service</Text.Body>
                                <Text.Body weight="semibold">Phone Number</Text.Body>
                                <Text.Body weight="semibold">Email</Text.Body>
                                <Text.Body>Mehraj</Text.Body> {/* Service Provider  */}
                                <Text.Body>Mehraj SP Test</Text.Body> {/* Service Name  */}
                                <Text.Body>+(65) 92379395</Text.Body> {/* Service Provider Number  */}
                                <Text.Body>Jmpasha@palo-it.com</Text.Body> {/* Service Provider Email  */}
                            </Layout.GridContainer>
                        </div>
                    </BoxContainer>

                    <Button.Small>Send to Queue <Icon type="arrow-right" /></Button.Small>
                    
                    <div className="spacer3"></div>
                </div>
                
            </Layout.Content>
        );
    }
}
export default BookingFound;