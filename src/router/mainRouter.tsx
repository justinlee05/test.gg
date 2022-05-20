import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TestComponent from "../components/Test";
import { HeaderContainer, StartContainer } from "../containers";

function MainRouter() {
  return (
    <>
      <HeaderContainer />
      <StartContainer />
      <TestComponent />
    </>
  );
}

export default MainRouter;
