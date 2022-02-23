import React from 'react';
import '../App.css';
import {Text, Form, Button, Layout, LinkList, Breadcrumb } from 'react-lifesg-design-system';
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

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;

const Main = styled.main`
  color: white;
  grid-area: queue;
  padding: 0.25rem;
`;


const UpcomingAppointments: React.FunctionComponent<Props> = (props) => {
  return (
      <>
        <StyledSection>
        <Layout.Container>
            <Breadcrumb links={[ { title: 'Home' , url: '/Home' }, { title: 'Appointments', url: '/Appointments' }, { title: 'Upcoming Appointments', url: '/UpcomingAppointments' }  ]} />
        
            <StyledContainer>
                <Layout.GridContainer className="column2">
                <div>
                    <Text.H3>Upcoming Appointments</Text.H3>
                    <div className='spacer1'></div>
                    <Text.Body>Government services appointments</Text.Body>
                </div>
                <div className="inlinecontent" style={{justifyItems: "end", alignItems: "center"}}>
                    <Button.Default
                        onClick={props.onSave}
                    >Add</Button.Default>
                </div>
                </Layout.GridContainer>
            </StyledContainer>
            <StyledContainer>
                <Main>
                    <LinkList items={[
                        {
                            title: "HDB Sales of Balance Flat",
                            description: "28 April 2022, Wednesday, 17:00",
                            href: "/UpcomingAppointments",
                        }, {
                            title: "MyHealth Hub",
                            description: "28 April 2022, Wednesday, 17:00",
                            href: "https://www.google.com",
                        }, {
                            title: "HDB Sales of Balance Flat",
                            description: "28 April 2022, Wednesday, 17:00",
                            href: "/UpcomingAppointments",
                        }, {
                            title: "MyHealth Hub",
                            description: "28 April 2022, Wednesday, 17:00",
                            href: "https://www.google.com",
                        }, {
                            title: "HDB Sales of Balance Flat",
                            description: "28 April 2022, Wednesday, 17:00",
                            href: "/UpcomingAppointments",
                        }, {
                            title: "MyHealth Hub",
                            description: "28 April 2022, Wednesday, 17:00",
                            href: "https://www.google.com",
                        }
                    ]} style="small" maxShown={5} />
                </Main>
            </StyledContainer>
            <div className="spacer5"></div>
        </Layout.Container>
        </StyledSection>
    </>
  )
}

export default UpcomingAppointments;