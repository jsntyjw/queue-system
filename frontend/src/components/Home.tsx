import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Text, MasonryTileGridContainer, MasonryTile, ImageSelector } from "react-lifesg-design-system"

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
        <MasonryTileGridContainer numOfCols={3}>

          <MasonryTile colEnd={1} colStart={1}>
            <ImageSelector description="Make a new booking now!" imgSrc="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/12%20Best%20Appointment%20Booking%20Apps%20HERO1627253223960628.jpg" title="Create a new booking" />
          </MasonryTile>
          <MasonryTile colEnd={2} colStart={2}>
            <ImageSelector description="Find out the booking info" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOT-CTWskmfFzeOF9Ice8xI03VpDoVgnUpyfoYoYrg6VqGJ4W_7tH9CrzFT8-jqOglig&usqp=CAU" title="Search for current booking" />
          </MasonryTile>

          <MasonryTile colEnd={3} colStart={3}>
            <ImageSelector description="Change, reschedule, cancel booking." imgSrc="http://bookinjiffy.com/wp-content/uploads/2020/08/calandar-digital-laptop-phone-760.jpg" title="Update current booking" />
          </MasonryTile>

        </MasonryTileGridContainer>

      </div>
    );
  }
}
export default Home;