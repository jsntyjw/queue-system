import React from "react";
import style from "./Home.module.css";

const Header: React.FC = () => {
  return (
    <div className={style.headcontainer}>
      <div className={style.headwrapper}>
        <div className={style.title}>
          <h2>Queue System</h2>
          <p>Welcome to the board.</p>
        </div>
      </div>
      <div className={style.profile}>
        {/* <img src={Image} alt="profile" className={style.image}/> */}
      </div>
    </div>
  );
};

export default Header;
