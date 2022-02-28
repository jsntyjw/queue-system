import * as React from 'react';
import { Link } from "react-router-dom";
import { Button, Text, MasonryTileGridContainer, MasonryTile, ImageSelector } from "react-lifesg-design-system"
require('dotenv').config();

interface IProps {
}
interface IState {
  url: string
}



class Home extends React.Component<IProps, IState> {
  // const configValue: string = (process.env.MY_EC2_ADDRESS as string);

  constructor(props) {
    super(props);
    this.state = {
      url: process.env.MY_EC2_ADDRESS as string
    }
  }
  public componentDidMount() {

  }

  public render(): React.ReactNode {

    return (

      <div>


        <br></br> <br></br> <br></br> <br></br>
        <MasonryTileGridContainer numOfCols={3}>

          <MasonryTile colEnd={1} colStart={1}>
            <ImageSelector
              href={process.env.REACT_APP_MY_EC2_ADDRESS + "Appointments"}
              description="View Appointments!" imgSrc="https://www.hp.com/us-en/shop/app/assets/images/uploads/prod/12%20Best%20Appointment%20Booking%20Apps%20HERO1627253223960628.jpg" title="Appointments" />
          </MasonryTile>
          <MasonryTile colEnd={2} colStart={2}>
            <ImageSelector
              href={process.env.REACT_APP_MY_EC2_ADDRESS + "Dashboard"}
              description="View Queue Dashboard" imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgOT-CTWskmfFzeOF9Ice8xI03VpDoVgnUpyfoYoYrg6VqGJ4W_7tH9CrzFT8-jqOglig&usqp=CAU" title="Dashboard" />
          </MasonryTile>

          <MasonryTile colEnd={3} colStart={3}>
            <ImageSelector
              href={process.env.REACT_APP_MY_EC2_ADDRESS + "ServiceCounter"}

              description="Service Counter Page." imgSrc="http://bookinjiffy.com/wp-content/uploads/2020/08/calandar-digital-laptop-phone-760.jpg" title="Service Counter" />
          </MasonryTile>

        </MasonryTileGridContainer>

      </div>
    );
  }
}
export default Home;