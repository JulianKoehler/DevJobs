import React from "react";

import FilterJobsProvider from "./store/FilterJobsProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import JobDetail from "./pages/JobDetail";

function App() {
  return (
    <FilterJobsProvider>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home />}
          />
          <Route
            exact
            path="/:jobId"
            element={<JobDetail />}
          />
        </Routes>
      </BrowserRouter>
    </FilterJobsProvider>
  );
}

export default App;
