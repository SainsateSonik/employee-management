import React, { useState } from "react";
import "../../styles/admin.scss";

import EmployeeData from "./EmloyeeData";
import Alert from "./Alert";

import employees from "../../data/employee";
import professionalRecord from "../../data/professionalRecord";

function AdminView() {
  const [alert, setAlert] = useState(false);
  const [employeeName, setEmployeeName] = useState(null);

  const listData = employees.map(({ id, name, contact }) => {
    const { attendance: attendanceRecord } = professionalRecord.find(record => {
      return record.emp_id === id;
    });
    const [{ count: attendance }] = attendanceRecord;

    function initAlert(employeeName) {
      setEmployeeName(employeeName);
      setAlert(true);
      setTimeout(() => setAlert(false), 1000);
    }

    return (
      <EmployeeData
        key={id}
        id={id}
        name={name}
        contact={contact}
        attendance={attendance}
        initAlert={initAlert}
      />
    );
  });

  return (
    <section className="dashboard__admin">
      <Alert alert={alert} />
      <div className="employee-record record__title">
        <div>empolyee Id</div>
        <div>name</div>
        <div>contact</div>
        <div>attendance</div>
        <div>alert</div>
      </div>
      {listData}
    </section>
  );
}

export default AdminView;
