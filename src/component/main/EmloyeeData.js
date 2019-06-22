import React from "react";

function EmloyeeData({ id, name, contact, attendance, initAlert }) {
  return (
    <div className="employee-record">
      <div>{id}</div>
      <div>{name}</div>
      <div>{contact}</div>
      <div>{attendance}</div>
      <div onClick={initAlert.bind(null, name)}>send-alert</div>
    </div>
  );
}

export default EmloyeeData;
