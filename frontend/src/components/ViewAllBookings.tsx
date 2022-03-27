import React from 'react';
import '../App.css';
import { Text, Layout, Accordion, } from 'react-lifesg-design-system';
import styled from "styled-components";
import Booking from "../models/booking";

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
  }

  public async searchByLocation() {
    console.log("test!")
    var apiURL: string

    apiURL = process.env.REACT_APP_APPOINTMENT_API_ADDRESS + 'api/booking/citizen/' + nric;


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
            element["generalType"],
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


          this.state.bookings.push(eachBooking)

          this.setState({
            bookings: this.state.bookings,
          });


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

                    </Text.Body>
                  </Accordion.Item>
                )
              })}
            </Accordion.Base>

          </Main>
          <div className="spacer3"></div>


        </div>
      </Layout.Container>

    )
  }




}

export default ViewAllBookings;



