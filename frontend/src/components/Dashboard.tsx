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
    callingNumber: string
}



class Dashboard extends React.Component<{}, MyState> {

    constructor(props){
        super(props);
        this.state = {
           callingNumber: '',

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

          var queueNumber = ""
          data.forEach(element => {
              console.log(element)
              if(element.bookingStatus == 'Doctor'){
                queueNumber = element.queueNumber;
              }
          });

          this.setState({
            callingNumber: queueNumber
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
                    <div className="column"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=',
                        mobile: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto='
                    }}>
                        Doctor Queue
                    </Banner>
                        <p>
                            <h4>Current serving:</h4>
                            {/* <h4>{this.state.callingNumber}</h4> */}
                            <a style={{'color': 'red', 'fontSize': 120}}>{this.state.callingNumber}</a>

                        </p>
                    </div>
                    <div className="column"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg',
                        mobile: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg'
                    }}>
                        Payment Queue
                    </Banner></div>
                    <div className="column"><Banner aria-label="career-advice" imgset={{
                        desktop: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg',
                        mobile: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg '
                    }}>
                        Medication Queue
                    </Banner></div>
                </div>
            </div>


            //   <>
            //     <StyledSection>
            //     <Layout.Container>
            //     <Breadcrumb links={[ { title: 'Home' , url: 'http://localhost:3000/' }, { title: 'Dashboard' } ]} />

            //         <StyledContainer>
            //             <Title><Text.H3>Currently Serving</Text.H3></Title>
            //             <Accordion.Base className='base' >
            //                 <Accordion.Item title="" key="" expanded={false}>
            //                     <Text.Body>
            //                         <ul>
            //                             <li>
            //                                 <b>Citizen Name :</b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Number: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Email: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start date:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start time:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Name:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Provider Location:</b>
            //                             </li>
            //                         </ul>
            //                     </Text.Body>
            //                 </Accordion.Item>
            //             </Accordion.Base>
            //         </StyledContainer>


            //         <StyledContainer>
            //             <Title><Text.H3>Upcoming Queue</Text.H3></Title>
            //             <Accordion.Base className='base' >
            //                 <Accordion.Item title="" key="" expanded={false}>
            //                     <Text.Body>
            //                         <ul>
            //                             <li>
            //                                 <b>Citizen Name :</b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Number: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Email: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start date:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start time:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Name:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Provider Location:</b>
            //                             </li>
            //                         </ul>
            //                     </Text.Body>
            //                 </Accordion.Item>
            //             </Accordion.Base>
            //         </StyledContainer>


            //         <StyledContainer>
            //             <Title><Text.H3>Previous Queue</Text.H3></Title>
            //             <Accordion.Base className='base' >
            //                 <Accordion.Item title="" key="" expanded={false}>
            //                     <Text.Body>
            //                         <ul>
            //                             <li>
            //                                 <b>Citizen Name :</b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Number: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Email: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start date:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start time:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Name:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Provider Location:</b>
            //                             </li>
            //                         </ul>
            //                     </Text.Body>
            //                 </Accordion.Item>
            //             </Accordion.Base>
            //         </StyledContainer>

            //         <StyledContainer>
            //             <Title><Text.H3>Missed Queue</Text.H3></Title>

            //             <Accordion.Base className='base' >
            //                 <Accordion.Item title="" key="" expanded={false}>
            //                     <Text.Body>
            //                         <ul>
            //                             <li>
            //                                 <b>Citizen Name :</b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Number: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Citizen Email: </b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start date:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service start time:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Name:</b>
            //                             </li>
            //                             <li>
            //                                 <b>Service Provider Location:</b>
            //                             </li>
            //                         </ul>

            //                         <Buttons>
            //                             <div>
            //                             <Button.Default
            //                                 onClick={props.onSave}
            //                             >Transfer</Button.Default>
            //                             </div>
            //                         </Buttons>
            //                     </Text.Body>
            //                 </Accordion.Item>
            //             </Accordion.Base>
            //         </StyledContainer>

            //         </Layout.Container>
            //     </StyledSection>
            // </>
        )
    }

}

export default Dashboard;