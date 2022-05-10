import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const MainRouter = lazy(() => import("./mainRouter"));

function RootRouter() {
  return (
    <BrowserRouter>
      <div id="RouterWrapper">
        <Routes>
          <Route
            path="/*"
            element={
              <Suspense fallback={<h1>Loading</h1>}>
                <MainRouter />
              </Suspense>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default RootRouter;
