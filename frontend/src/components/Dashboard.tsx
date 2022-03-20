import React from 'react';
import '../App.css';
import {
    Text,
    Button,
    Layout,
    Breadcrumb,
    Accordion,
    Banner,
    InputSelect
} from 'react-lifesg-design-system';
import styled from "styled-components";
import DashboardHPB from './DashboardHPB';
import DashboardHospital from './DashboardHospital';

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
    showDashboardHPB: string,
    showDashboardHospital: string,
    currentView: string
}



class Dashboard extends React.Component<{}, MyState> {

    constructor(props) {
        super(props);
        this.state = {
            showDashboardHPB: 'block',
            showDashboardHospital: 'none',
            currentView: 'HPB'
        };
    }

    
    render() {
        return (

            <div>
               
                <div id='divHospitalService' className="inlinecontent" style={{  maxWidth: '400px', margin: '50px' }}>
                Current View: {this.state.currentView}
                    <InputSelect
                        options={[
                            { value: "HPB", label: "HPB" },
                            { value: "Hospital", label: "Hospital" },
                        ]}

                        valueExtractor={(item) => item.value}
                        listExtractor={(item) => item.label}

                        displayValueExtractor={(item) => item.label}
                        placeholder= "Change agency view"
                        onSelectItem={(item, selectedValue) => {
                            if(selectedValue == "HPB"){
                                this.setState({
                                    showDashboardHPB: "block",
                                    showDashboardHospital: 'none',
                                    currentView: 'HPB'
                                })
                            }
                            else{
                                this.setState({
                                    showDashboardHPB: "none",
                                    showDashboardHospital: 'block',
                                    currentView: 'Hospital'
                                })
                            }
                            // this.setState({ inputValue: selectedValue }, () => {
                            //     // this.ddlService(selectedValue)

                            // });
                        }} />

                </div>

                <div style={{display: this.state.showDashboardHospital}}>
                <DashboardHospital />

                </div>

                <div style={{display: this.state.showDashboardHPB}}>
                <DashboardHPB />

                </div>


            </div>


            //     <div>

            //         <div className="row">
            //             <div className="column"><Banner aria-label="career-advice" imgset={{
            //                 desktop: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto=',
            //                 mobile: 'https://media.istockphoto.com/vectors/abstract-wavy-halftone-dots-background-vector-id1225681170?k=20&m=1225681170&s=612x612&w=0&h=qFzphEqIRbzXBdzL3kqcfwS2ULgmOpIRFYi_2WSgCto='
            //             }}>
            //                 Doctor Queue
            //             </Banner>
            //                 <p>
            //                     <h4>Current serving:</h4>
            //                     {/* <h4>{this.state.callingNumber}</h4> */}
            //                     <a style={{'color': 'red', 'fontSize': 120}}>{this.state.callingNumber}</a>

            //                 </p>
            //             </div>
            //             <div className="column"><Banner aria-label="career-advice" imgset={{
            //                 desktop: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg',
            //                 mobile: 'https://t3.ftcdn.net/jpg/01/98/05/16/360_F_198051606_qB9GmDGg79tCtoiHkuTtYAQlqpN6feyL.jpg'
            //             }}>
            //                 Payment Queue
            //             </Banner></div>
            //             <div className="column"><Banner aria-label="career-advice" imgset={{
            //                 desktop: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg',
            //                 mobile: 'https://img.pixers.pics/pho_wat(s3:700/FO/53/85/12/47/700_FO53851247_4fa5696a1fd03408f927d1e7a2f0fcaa.jpg,700,601,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,551,jpg)/posters-wavy-dots-abstract-white-background.jpg.jpg '
            //             }}>
            //                 Medication Queue
            //             </Banner></div>
            //         </div>
            //     </div>



        )
    }

}

export default Dashboard;