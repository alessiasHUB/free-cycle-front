import React from "react";

export interface IInputPageProps {}

const InputPage: React.FunctionComponent<IInputPageProps> = (props) => {
  return (
    <main className="content">
      <div className="input-page">
        <p>Input page</p>
      </div>
    </main>
  );
};

export default InputPage;
