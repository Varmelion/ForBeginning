import React from "react";
import { Redirect } from "react-router-dom";

const Hello = () => (
  <p>
    <Redirect to="/pop" />
    Hello
  </p>
);

export default Hello;
