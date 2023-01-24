import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      Hey user, This Route or Page you are trying to reach is UnVailable.{" "}
      <p>please enter a valid route or page</p>
      <h3>{err.statusText}</h3>
      <h3>{err.status}</h3>
    </div>
  );
};

export default Error;
