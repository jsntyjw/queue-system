import React from 'react';
import '../App.css';
import { 
    Text, 
    Button, 
    Layout, 
    Breadcrumb,
    Accordion
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


const Dashboard: React.FunctionComponent<Props> = (props) => {
  return (
      <>
        <StyledSection>
        <Layout.Container>
        <Breadcrumb links={[ { title: 'Home' , url: 'http://localhost:3000/' }, { title: 'Dashboard' } ]} />
        
            <StyledContainer>
                <Title><Text.H3>Currently Serving</Text.H3></Title>
                <Accordion.Base className='base' >
                    <Accordion.Item title="" key="" expanded={false}>
                        <Text.Body>
                            <ul>
                                <li>
                                    <b>Citizen Name :</b>
                                </li>
                                <li>
                                    <b>Citizen Number: </b>
                                </li>
                                <li>
                                    <b>Citizen Email: </b>
                                </li>
                                <li>
                                    <b>Service start date:</b>
                                </li>
                                <li>
                                    <b>Service start time:</b>
                                </li>
                                <li>
                                    <b>Service Name:</b>
                                </li>
                                <li>
                                    <b>Service Provider Location:</b>
                                </li>
                            </ul>
                        </Text.Body>
                    </Accordion.Item>
                </Accordion.Base>
            </StyledContainer>


            <StyledContainer>
                <Title><Text.H3>Upcoming Queue</Text.H3></Title>
                <Accordion.Base className='base' >
                    <Accordion.Item title="" key="" expanded={false}>
                        <Text.Body>
                            <ul>
                                <li>
                                    <b>Citizen Name :</b>
                                </li>
                                <li>
                                    <b>Citizen Number: </b>
                                </li>
                                <li>
                                    <b>Citizen Email: </b>
                                </li>
                                <li>
                                    <b>Service start date:</b>
                                </li>
                                <li>
                                    <b>Service start time:</b>
                                </li>
                                <li>
                                    <b>Service Name:</b>
                                </li>
                                <li>
                                    <b>Service Provider Location:</b>
                                </li>
                            </ul>
                        </Text.Body>
                    </Accordion.Item>
                </Accordion.Base>
            </StyledContainer>
      

            <StyledContainer>
                <Title><Text.H3>Previous Queue</Text.H3></Title>
                <Accordion.Base className='base' >
                    <Accordion.Item title="" key="" expanded={false}>
                        <Text.Body>
                            <ul>
                                <li>
                                    <b>Citizen Name :</b>
                                </li>
                                <li>
                                    <b>Citizen Number: </b>
                                </li>
                                <li>
                                    <b>Citizen Email: </b>
                                </li>
                                <li>
                                    <b>Service start date:</b>
                                </li>
                                <li>
                                    <b>Service start time:</b>
                                </li>
                                <li>
                                    <b>Service Name:</b>
                                </li>
                                <li>
                                    <b>Service Provider Location:</b>
                                </li>
                            </ul>
                        </Text.Body>
                    </Accordion.Item>
                </Accordion.Base>
            </StyledContainer>

            <StyledContainer>
                <Title><Text.H3>Missed Queue</Text.H3></Title>
                
                <Accordion.Base className='base' >
                    <Accordion.Item title="" key="" expanded={false}>
                        <Text.Body>
                            <ul>
                                <li>
                                    <b>Citizen Name :</b>
                                </li>
                                <li>
                                    <b>Citizen Number: </b>
                                </li>
                                <li>
                                    <b>Citizen Email: </b>
                                </li>
                                <li>
                                    <b>Service start date:</b>
                                </li>
                                <li>
                                    <b>Service start time:</b>
                                </li>
                                <li>
                                    <b>Service Name:</b>
                                </li>
                                <li>
                                    <b>Service Provider Location:</b>
                                </li>
                            </ul>

                            <Buttons>
                                <div>
                                <Button.Default
                                    onClick={props.onSave}
                                >Transfer</Button.Default>
                                </div>
                            </Buttons>
                        </Text.Body>
                    </Accordion.Item>
                </Accordion.Base>
            </StyledContainer>
            
            </Layout.Container>
        </StyledSection>
    </>
  )
}

export default Dashboard;