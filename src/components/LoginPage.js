import React from "react";
import { Outlet } from "react-router-dom";

const LoginPage = () => {
  return (
    <>
      <div>---LoginPage Main---</div>
      <p>.............==================..............</p>
      <Outlet />
    </>
  );
};

export default LoginPage;
