import "./App.css";
import React from "react";
import moment from "moment";
import styled from "styled-components";

const StyledLink = styled.a`
  transition: all ease 0.2s;

  ${(props) =>
    props.open
      ? `
      :hover {
        -webkit-animation: glow 1s ease-in-out infinite alternate;
        -moz-animation: glow 1s ease-in-out infinite alternate;
        animation: glow 1s ease-in-out infinite alternate;
        color: darkred;
  }`
      : "cursor: default;"}
`;

function App() {
  const open = (date) => {
    const todayOrPast = moment(`11/${date}/2020`).diff(moment(), "days") <= 0;
    return todayOrPast;
  };
  return (
    <div className="App">
      <header className="App-header">
        <div className="Panel-1">
          <StyledLink
            id="Door-1"
            href={open(1) ? "https://www.thegingerbreadcity.com/1" : null}
            open={open(1)}
          >
            1
          </StyledLink>
          <StyledLink
            id="Door-22"
            href={open(22) ? "https://www.thegingerbreadcity.com/16" : null}
            open={open(22)}
          >
            22
          </StyledLink>
        </div>
        <div className="Panel-2">
          <StyledLink
            id="Door-7"
            href={open(7) ? "https://www.thegingerbreadcity.com/1" : null}
            open={open(7)}
          >
            7
          </StyledLink>
        </div>
        <div className="Panel-3" />
      </header>
    </div>
  );
}

export default App;
