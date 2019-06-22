import React from "react";

function Alert({ alert, employee }) {
  return (
    <div
      className="alert"
      style={{
        display: alert ? "block" : "none"
      }}
    >
      {`${employee} has been reminded for attendance`}
    </div>
  );
}

export default Alert;
