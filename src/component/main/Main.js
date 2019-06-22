import React from "react";
import "../../styles/main.scss";
import EmployeeView from "./EmployeeView";
import AdminView from "./AdminView";

import { userTypes } from "../../ref/userTypes";

function Main({ userType }) {
  let view;
  if (userType === userTypes.EMPLOYEE) view = <EmployeeView />;
  if (userType === userTypes.ADMIN) view = <AdminView />;

  return <main>{view}</main>;
}

export default Main;
