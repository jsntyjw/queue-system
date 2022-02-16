import * as React from 'react';
import { Link } from "react-router-dom";
import {Button, Text, MasonryTileGridContainer, MasonryTile, ImageSelector} from "react-lifesg-design-system"
// import {} from 'react-lifesg-design-system'

interface IProps {
}
interface IState {
}




class Home extends React.Component<IProps, IState> {


    public componentDidMount() {

    }

    public render(): React.ReactNode {
        return (

            
            <div>

<br></br> <br></br> <br></br> <br></br> 
<MasonryTileGridContainer  numOfCols={3}>
  
  <MasonryTile colEnd={1} colStart={1}>
    <ImageSelector description="Make a new booking now!" imgSrc="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/12%20Best%20Appointment%20Booking%20Apps%20HERO1627253223960628.jpg" title="Create a new booking" />
  </MasonryTile>
  <MasonryTile colEnd={2} colStart={2}>
    <ImageSelector description="Find out the booking info" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOT-CTWskmfFzeOF9Ice8xI03VpDoVgnUpyfoYoYrg6VqGJ4W_7tH9CrzFT8-jqOglig&usqp=CAU" title="Search for current booking" />
  </MasonryTile>
 
  <MasonryTile colEnd={3} colStart={3}>
    <ImageSelector description="Change, reschedule, cancel booking." imgSrc="http://bookinjiffy.com/wp-content/uploads/2020/08/calandar-digital-laptop-phone-760.jpg" title="Update current booking"  />
  </MasonryTile>

</MasonryTileGridContainer>


{/* 
                <div className="px-4 py-5 my-5 text-center">
                    <img className="d-block mx-auto mb-4" src="https://avatars.githubusercontent.com/u/28618678?v=4" alt="" width="72"/>
                        <h1 className="display-5 fw-bold">Queue Management System</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">Queue Management System</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                <a type="button" className="btn btn-primary btn-lg px-4 gap-3"
                                 href="https://www.google.com">Go to Google</a>

                                  <Link to={'/index'} className="btn btn-outline-secondary btn-lg px-4">Index</Link> 
                            </div>
                        </div>
                </div> */}

            </div>
        );
    }
}
export default Home;