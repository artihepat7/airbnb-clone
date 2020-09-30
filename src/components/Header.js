import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://lh3.googleusercontent.com/proxy/2Jv_odrEBb4GtEi3dvUzpkKLnrNFMCqZsffyEuYweIbJNjh3StFSiWA5dBWojABgmUpew61xG755wYDXdk7pI9OeqKJEg2b-ET6M0nvi6Y-SiAVHQw"
        alt="logo"
      />
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
