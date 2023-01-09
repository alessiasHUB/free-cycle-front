import React from "react";

export interface ITodayProps {}

const Today: React.FunctionComponent<ITodayProps> = (props) => {
  return (
    <main className="content">
      <div className="today">
        <p>Today</p>
      </div>
    </main>
  );
};

export default Today;
