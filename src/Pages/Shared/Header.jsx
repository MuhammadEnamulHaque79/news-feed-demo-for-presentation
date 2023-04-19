import React from 'react';
import logo from '../../assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>Journalism Without Fear or Favour</small> </p>
                {/* <p>Sunday, November 27, 2022</p> */}
                <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
            </div>
        </div>
    );
};

export default Header;