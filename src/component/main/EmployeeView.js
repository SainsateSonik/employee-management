import React from "react";

function EmployeeView() {
  return (
    <>
      <section className="dashboard">
        <div>You have worked 14 days this months</div>
      </section>
      <section className="events">
        <div className="events__reminder">
          <div class="event__title">reminders</div>
          <ul>
            <li />
          </ul>
        </div>
        <div className="events__upcomming">
          <div class="event__title">upcomming</div>
          <ul>
            <li />
          </ul>
        </div>
      </section>
    </>
  );
}

export default EmployeeView;
