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
    padding: 0 25px;
`;

const StyledContainer1 = styled(Layout.GridContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "title"
        "queue";
    grid-gap: 0.25rem;
    padding: 25px;
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
  return (
      <>
        <StyledSection>
        <Layout.Container>
            <Breadcrumb links={[ { title: 'Home' , url: 'http://localhost:3000/' }, { title: 'Appointments' } ]} />
        
            <StyledContainer>
                <div className="inlinecontent" style={{justifyItems: "start",}}>
                    <InputGroup addon={{
                        children: <Icon type="search" />,
                        type: 'custom'
                        }} placeholder="Search..." />
                    <Button.Default>Search</Button.Default>
                </div>
                <div className="spacer3"></div>
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
                <div className="spacer1"></div>
                <Main>
                    <LinkList items={[{
                    title: "Upcoming Appointments",
                    description: "There is currently one appointments.",
                    href: "https://www.google.com",
                    target: "_blank"
                }, {
                    title: "Missed Appointments",
                    description: "There is no missed appointments.",
                    href: "https://www.google.com",
                    target: "_blank"
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