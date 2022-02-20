import React from 'react';
import '../App.css';
import { 
    Text, 
    Form, 
    Button, 
    Layout, 
    Banner, 
    LinkList,
    Breadcrumb 
} from 'react-lifesg-design-system';
import { ThemeProvider } from "styled-components";
import styled from "styled-components";

interface Props {
    onChange: (fieldName: string, value: string) => void;
    onSave: () => void;
}

const StyledContainer = styled(Layout.GridContainer)`
    grid-template-rows: 1fr 1fr 4fr 0fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "title title title title"
        "button button button button"
        "queue queue queue queue";
    grid-gap: 0.25rem;
    padding: 25px;

`;

const StyledSection = styled(Layout.Section)`
    margin-top: 8%;
    min-height: 600px;
`;


const Title = styled.div`
  grid-area: title;
  padding: 0.25rem;
`;
const NavBar = styled.div`
  grid-area: button;
  padding: 0.25rem;
`;
const Main = styled.main`
  color: white;
  grid-area: queue;
  padding: 0.25rem;
`;


const ServiceCounter: React.FunctionComponent<Props> = (props) => {
  return (
      <>
        <StyledSection>
        <Breadcrumb links={[ { title: 'Home' , url: 'http://localhost:3000/ServiceCounter' }, { title: 'Service Counter' } ]} />
        
            
      

            <StyledContainer>
                <Title><Text.H3>Current Serving</Text.H3></Title>
                <NavBar>
                    
                    <div className='btn_right'>
                    <Button.Default
                        onClick={props.onSave}
                    >Next Number</Button.Default>
                    </div>
                </NavBar>
                <Main>
                    <LinkList items={[{
                    title: "First queue",
                    href: "https://www.google.com",
                    target: "_blank"
                }, {
                    title: "Second queue",
                    description: "Excepteur sint occaecat cupidatat non proident",
                    href: "https://www.google.com",
                    target: "_blank"
                }, {
                    title: "Third queue",
                    description: "Lorem ipsum dolar sit amet",
                    href: "https://www.google.com",
                    target: "_blank"
                }, {
                    title: "Fourth queue",
                    description: "Ut enim ad minima veniam, quis nostrum exercitationem",
                    href: "https://www.google.com",
                    target: "_blank"
                }]} style="small" maxShown={2} />
                </Main>
             
                
            </StyledContainer>

            
        </StyledSection>
    </>
  )
}

export default ServiceCounter;