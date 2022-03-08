import React, { useState } from 'react';
import '../App.css';
import { Text, Button, Layout, BoxContainer, Breadcrumb, InputGroup, Accordion, InputSelect, Modal, RadioButton, } from 'react-lifesg-design-system';
import styled from "styled-components";
import Booking from "../models/booking";



const StyledContainer = styled(Layout.GridContainer)`
    grid-template-rows: 1fr;
    grid-template-columns: 12fr;
    grid-template-areas:
        "title"
        "button "
        "queue";
    grid-gap: 0.25rem;
    grid-row-gap: 16px;
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

interface MyState {
  bookings: Booking[]
}


var sessionResult = sessionStorage.getItem('data') || '{}'
var obj = JSON.parse(sessionResult);
console.log(sessionResult)

var nric = obj.userName

class ViewAllBookings extends React.Component<{}, MyState> {



  constructor(props) {
    super(props);
    this.state = {
      bookings: []


    };
    // this.searchByLocation = this.searchByLocation.bind(this)
  }

  public async searchByLocation() {
    console.log("test!")
    var apiURL: string

    apiURL = process.env.REACT_APP_MY_EC2_API_ADDRESS + 'api/booking/citizen/' +  nric;
    // document.getElementById("divAppointments")!!.style.display = "block";


    fetch(apiURL)
      .then(function (response) {

        return response.json();
      })
      .then((myJson) => {
        this.state.bookings.length = 0;
        myJson.data.forEach(element => {
          var eachBooking = new Booking(
            element["_id"],
            element["nric"],
            element["citizenName"],
            element["citizenSalutation"],
            element["citizenEmail"],
            element["citizenNumber"],
            element["serviceName"],
            element["serviceProviderName"],
            element["serviceProviderEmail"],
            element["serviceProviderPhone"],
            element["serviceStartDate"],
            element["serviceStartTime"],
            element["serviceProviderLocation"],
            element["bookingStatus"],
            element["queueNumber"]
          );


          // const bookings = this.state.bookings.slice(0);
          this.state.bookings.push(eachBooking)
          // console.log(bookings)
          this.setState({
            bookings: this.state.bookings,
          });
          console.log(this.state.bookings)

        });
      });
  }

  componentWillMount() {
    this.searchByLocation();

}

  render() {

    return (

    <Layout.Container>
    <div >
      {/* <StyledContainer> */}
        <br /><br /><br /><br />
        <Text.H3>Appointments</Text.H3>
        <Text.Body>Government services appointments</Text.Body>
        <Main>

          <Accordion.Base className='base' >
            {this.state.bookings.map((input, index) => {

              console.log(this.state.bookings)
              return (
                <Accordion.Item title={input.ServiceName} key={index} expanded={false}>
                  <Text.Body>
                    <ul>
                      <li>
                        <b>Citizen Name :</b>  {input.CitizenName}
                      </li>
                      <li>
                        <b>Citizen Number: </b> {input.CitizenNumber}
                      </li>
                      <li>
                        <b>Citizen Email: </b> {input.CitizenEmail}
                      </li>
                      <li>
                        <b>Service start date:</b>  {input.ServiceStartDate}
                      </li>
                      <li>
                        <b>Service start time:</b>  {input.ServiceStartTime}
                      </li>
                      <li>
                        <b>Service Name:</b>  {input.ServiceName}
                      </li>
                      <li>
                        <b>Service Provider Location:</b>  {input.ServiceProviderLocation}
                      </li>
                    </ul>

                    {/* <Button.Default
                                      onClick={() => this.checkPage(this.handle200, input.Id!!, input.Nric, input.CitizenName, input.CitizenEmail, input.CitizenNumber)}
                                  >Send to Queue</Button.Default> */}
                  </Text.Body>
                </Accordion.Item>
              )
            })}
          </Accordion.Base>

        </Main>
        <div className="spacer3"></div>
      {/* </StyledContainer> */}

    </div>
    </Layout.Container>

    )
  }




}

export default ViewAllBookings;



