import React from "react";
import "../../styles/header.scss";

import UnautorizedNavLinks from "./UnautorizedNavLinks";
import EmployeeNavLinks from "./EmployeeNavLinks";
import AdminNavLinks from "./AdminNavLinks";
import { userTypes } from "../../ref/userTypes";

function Header({ userType }) {
  let navLinks;
  if (userType === userTypes.ADMIN) navLinks = <AdminNavLinks />;
  else if (userType === userTypes.EMPLOYEE) navLinks = <EmployeeNavLinks />;
  else navLinks = <UnautorizedNavLinks />;

  return (
    <header>
      <nav>
        <div className="brand">billtrim</div>
        {navLinks}
      </nav>
    </header>
  );
}

export default Header;
