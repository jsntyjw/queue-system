import React from 'react';
import '../App.css';
import { Text, Form, Button, Layout, BoxContainer, LinkList, Breadcrumb, Icon, InputGroup, Accordion } from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import Booking from "../models/booking";
import { render } from 'react-dom';


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
    grid-row-gap: 16px;
    padding: 0 25px;
`;

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

const Main = styled.main`
  color: white;
  grid-area: queue;
  padding: 0.25rem;
`;


// const Appointment: React.FunctionComponent<Props> = (props) => {
class Appointment extends React.Component {


    state = {
        bookings: [],
        booking: Booking,
        }

    public async  searchByLocation() {
        let data = ''
        const newSubElement = document.getElementsByTagName("Accordion.Base")[0]


        fetch('http://localhost:3001/api/booking')
            .then(function (response) {
                return response.json();

            })

            .then(function (myJson) {
                myJson.data.forEach(element => {
                    var eachBooking = new Booking(
                        element["_id"],
                        element["nric"],
                        element["citizenName"],
                        element["citizenSalutation"],
                        element["citizenEmail"],
                        element["citizenNumber"],
                        element["serviceName"],
                        element["serviceProviderName"],
                        element["serviceProviderEmail"],
                        element["serviceProviderPhone"],
                        element["serviceStartDate"],
                        element["serviceStartTime"],
                        element["serviceProviderLocation"],
                        element["bookingStatus"]
                    );
                    console.log(eachBooking.Nric)
                    
                    // console.log(newSubElement)
                    // var newDiv = document.createElement("Accordion.Item"); 
                    // var sub_Div = document.createElement("Text.Body")
                    // var newContent = document.createTextNode(element["citizenEmail"])
                    
                    
                    // newSubElement.append(newDiv)
                    // newDiv.append(sub_Div)
                    // sub_Div.append(newContent)
                    
                    // var newContent = document.createTextNode(element["citizenEmail"])
                    // newSubElement.appendChild(newContent)

                    // return newSubElement;

                    // console.log(newSubElement)

                    // var out_str = 
                    //     `<Accordion.Item  title="` + eachBooking.CitizenEmail + `">
                            
                    //     <Text.Body>`+ 
                    //     `
                    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    //     do eiusmod tempor incididunt ut labore et dolore magna
                    //     aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    //     ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    // </Text.Body>
                    //     </Accordion.Item>` 

                        // var parser = new DOMParser();
	                    // var output = parser.parseFromString(out_str, 'text/html');
                      
                    //     console.log(output)
                    // return output;  
                    

                    
                    
                })
                
                
                ;

                //    var eachBooking = new Booking(myJson.data[0][])

                // console.log(myJson.data[0])

                //     console.log(myJson.data[0]["nric"])
                //     console.log(myJson.data[0]["citizenSalutation"])

                //     console.log(myJson.data[0]["nric"])
                //     console.log(myJson.data[0]["nric"])
                //     console.log(myJson.data[0]["nric"])
                //     console.log(myJson.data[0]["nric"])
                //     console.log(myJson.data[0]["nric"])
                //     console.log(myJson.data[0]["nric"])

            });
    }




    // public async searchByLocation(): Promise<Booking[]> {
    //     const response = await fetch('http://localhost:3001/api/booking');
    //     // var result = await response.json().then()

    //     var result = objArray.map(function(a) {return a.foo;});
    //     return result.data
    //     var bookings = result.data
    //     console.log(bookings)
    //     // console.log(await response.json()) ;
    // }


    render() {

        return (

            <StyledSection>
                <Layout.Container>
                    <Breadcrumb links={[{ title: 'Home', url: '/Home' }, { title: 'Appointments' }]} />

                    <StyledContainer>
                        <div className="inlinecontent" style={{ justifyItems: "start", }}>
                            <InputGroup addon={{
                                // children: <Icon type="search" />,
                                type: 'custom'
                            }} placeholder="Search..." />
                            <Button.Default onClick={this.searchByLocation}>Search</Button.Default>
                        </div>
                        <div className="spacer2"></div>
                        <BoxContainer title="Citizen Information" collapsible={false} className="textleft">
                            <div style={{ padding: "2rem", minWidth: "1080px" }}>
                                <Layout.GridContainer className="column4">
                                    <Text.Body weight="semibold">NRIC</Text.Body>
                                    <Text.Body weight="semibold">Salutation/Name</Text.Body>
                                    <Text.Body weight="semibold">Phone Number</Text.Body>
                                    <Text.Body weight="semibold">Email</Text.Body>
                                    <Text.Body>S****567D</Text.Body> {/* Service Provider  */}
                                    <Text.Body>Mr. Mehraj Shaik Pasha</Text.Body> {/* Service Name  */}
                                    <Text.Body>+(65) 92379395</Text.Body> {/* Phone */}
                                    <Text.Body>mehraj999@gmail.com</Text.Body> {/* Email  */}
                                </Layout.GridContainer>
                            </div>
                        </BoxContainer>
                    </StyledContainer>
                    <div className="spacer5"></div>
                    <StyledContainer>
                        <Text.H3>Appointments</Text.H3>
                        <Text.Body>Government services appointments</Text.Body>
                        <Main>


                            <Accordion.Base className='base'>

                                {/* {this.state.output} */}

                            </Accordion.Base>

                            {/* <LinkList items={[
                                {
                                    title: "Upcoming Appointments",
                                    description: "There is currently one appointments.",
                                    href: "/UpcomingAppointments",
                                }, {
                                    title: "Missed Appointments",
                                    description: "There is no missed appointments.",
                                    href: "https://www.google.com",
                                }
                            ]} style="small" maxShown={2} /> */}
                        </Main>

                        <div className="spacer3"></div>





                    </StyledContainer>
                </Layout.Container>
            </StyledSection>

        )
    }
}

export default Appointment;

function componentDidMount() {
    throw new Error('Function not implemented.');
}
