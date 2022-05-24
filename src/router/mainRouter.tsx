import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeaderContainer, MainContainer, StartContainer } from "../containers";

function MainRouter() {



  return (
    <>
      <HeaderContainer />
      <StartContainer />
      <Routes>
        <Route path="/" element={
          <MainContainer />
        } />
      </Routes>
    </>
  );
}

export default MainRouter;
