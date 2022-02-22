import React from 'react';
import '../App.css';
import {Text, Form, Button, Layout, BoxContainer, LinkList, Breadcrumb, Icon, InputGroup } from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
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


const Appointment: React.FunctionComponent<Props> = (props) => {


   

// var axios = require('axios');
//     var data = JSON.stringify({
//       "collection": "bookings",
//       "database": "myFirstDatabase",
//       "dataSource": "SMU-FYP",
//       "projection": {
//         "_id": 1
//       }
//     });
  
//     var config = {
//       method: 'post',
//       url: 'https://data.mongodb-api.com/app/data-bmvll/endpoint/data/beta/action/findOne',
//       headers: {
//         'Content-Type': 'application/json',
//         'Access-Control-Request-Headers': '*',
//         'api-key': 'R5KIDgHFaMolqyyMbSokgzA1O7OTD0vDT9PPFnxBiaUtm9cvGGkLkqjzP46U8ZOM'
//       },
//       data: data
//     };
  
//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });



  return (
      <>
        <StyledSection>
        <Layout.Container>
            <Breadcrumb links={[ { title: 'Home', url: '/Home' }, { title: 'Appointments' } ]} />
        
            <StyledContainer>
                <div className="inlinecontent" style={{justifyItems: "start",}}>
                    <InputGroup addon={{
                        children: <Icon type="search" />,
                        type: 'custom'
                        }} placeholder="Search..." />
                    <Button.Default>Search</Button.Default>
                </div>
                <div className="spacer2"></div>
                <BoxContainer title="Citizen Information" collapsible={false} className="textleft">
                    <div style={{padding: "2rem", minWidth: "1080px"}}>
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
                    <LinkList items={[
                        {
                            title: "Upcoming Appointments",
                            description: "There is currently one appointments.",
                            href: "/UpcomingAppointments",
                        }, {
                            title: "Missed Appointments",
                            description: "There is no missed appointments.",
                            href: "https://www.google.com",
                        }
                    ]} style="small" maxShown={2} />
                </Main>
            
                <div className="spacer3"></div>
            </StyledContainer>
        </Layout.Container>
        </StyledSection>
    </>
  )
}

export default Appointment;