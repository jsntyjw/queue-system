import * as React from 'react';
import {Link} from "react-router-dom";
import {Layout, Text, Button, Icon} from "react-lifesg-design-system";
import '../index.css';

interface IProps {
}
interface IState {
}

class ScanIC extends React.Component<IProps, IState> {


    public render(): React.ReactNode {
        return (
            <Layout.Content className="center">
                <div className="content"> 
                    {/* <div className="spacer4"></div> */}
                    <Text.H2>Please scan the barcode on the back of the NRIC</Text.H2>
                    <div className="spacer1"></div>
                    <img className="animatedicon" src={require("../assets/img/icons/id.gif")}/>
                    <div className="spacer2"></div>
                    <div className="inlinecontent">
                        <Link to="/BookingFound">
                            <Button.Small className="buttonsuccess"><Icon type="check" /> Booking Found</Button.Small>
                        </Link>
                        <Button.Small className="buttonerror"><Icon type="cross" /> Booking Not Found</Button.Small>
                    </div>
                    <div className="spacer4"></div>
                </div>
            </Layout.Content>
        );
    }
}
export default ScanIC;