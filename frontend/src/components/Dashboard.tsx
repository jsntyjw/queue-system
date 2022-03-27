import React from 'react';
import '../App.css';
import {
    InputSelect
} from 'react-lifesg-design-system';
import DashboardHPB from './DashboardHPB';
import DashboardHospital from './DashboardHospital';


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
               
               <span style={{ fontSize: '20px' }}>Current View: <b>{this.state.currentView}</b></span>
                <div id='divHospitalService' className="inlinecontent" style={{  maxWidth: '400px', margin: '40px 0', 'zIndex': '1' }}>
                
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
                    }} />

                </div>

                <div style={{display: this.state.showDashboardHospital}}>
                <DashboardHospital />

                </div>

                <div style={{display: this.state.showDashboardHPB}}>
                <DashboardHPB />

                </div>


            </div>

        )
    }

}

export default Dashboard;