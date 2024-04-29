import React from "react";
import User from "../data/user";
import { UserProfile } from "./data/user";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.color }}>
        {props.name} is a Web Developer from {props.city}
      </h1>
      <UserProfile />
    </div>
  );
}

export default Home;
