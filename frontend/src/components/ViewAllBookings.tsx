import React from "react";
import { Link } from "react-router-dom";
import Booking from "../models/booking";
import BaseService from "../service/base.service";
import * as toastr from "toastr";

function Del(Id?: string) {
  BaseService.delete("/booking/del/", {
    id: Id,
  }).then((rp) => {
    if (rp.Status) {
      toastr.success("Member saved.");
      window.location.reload();
    } else {
      toastr.error(rp.Messages);
      console.log("Messages: " + rp.Messages);
      console.log("Exception: " + rp.Exception);
    }
  });
}

interface IProps {
  booking: Booking;
  index: Number;
}

const ViewAllBookings: React.FunctionComponent<IProps> = (props) => {

  
  return (


    


    <tr>
      <td>{props.index}</td>
      <td>{props.booking.Nric}</td>
      <td>{props.booking.CitizenName}</td>
      <td>{props.booking.CitizenSalutation}</td>
      <td>{props.booking.CitizenEmail}</td>
      <td>{props.booking.CitizenNumber}</td>

      <td>{props.booking.ServiceName}</td>
      <td>{props.booking.ServiceProviderName}</td>
      <td>{props.booking.ServiceProviderEmail}</td>
      <td>{props.booking.ServiceProviderPhone}</td>
      <td>{props.booking.ServiceStartDate}</td>
      <td>{props.booking.ServiceStartTime}</td>

      <td>{props.booking.BookingStatus}</td>

      <td>
        <Link to={"/edit/" + props.booking.Id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <button onClick={() => Del(props.booking.Id)} className="btn btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
};


export default ViewAllBookings;
