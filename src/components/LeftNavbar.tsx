import React, { Component } from "react";
import style from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faIdBadge,
  faCogs,
} from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'

class LeftNavbar extends Component {

  render() {
      return (
        <div className={style.navcontainer}>
        <div className={style.logo}>
          <h2>Logo</h2>
        </div>
        <div className={style.wrapper}>
          <ul>
            <li>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ width: "16px", cursor: "pointer" }}
              />
              
              <Link to="/appContent">Appointments</Link>
            </li>
            <li>
              <FontAwesomeIcon
                icon={faIdBadge}
                style={{ width: "16px", cursor: "pointer" }}
              />
              { <Link to="/dashboard">Dashboard</Link> }
            </li>
            <li>
              <FontAwesomeIcon
                icon={faCogs}
                style={{ width: "20px", cursor: "pointer" }}
              />
              <Link to="/settings">Settings</Link> 
              
            </li>
          </ul>

        </div>
      </div>
      )
  }
  
      
}

export default LeftNavbar;
