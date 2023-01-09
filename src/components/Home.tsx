import React from "react";

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <main className="content">
      <div className="home">
        <p>Hi, welcome to Free-cycles.</p>
      </div>
    </main>
  );
};

export default Home;
