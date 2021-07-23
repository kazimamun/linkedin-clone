import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import HeaderOption from './HeaderOption';

const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <img src="https://image.flaticon.com/icons/png/512/174/174857.png" alt="" />
                <div className="header_search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            <div className="header_right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
            </div>
        </div>
    );
};

export default Header;