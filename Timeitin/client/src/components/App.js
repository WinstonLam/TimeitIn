import React from "react";
import Header from "./Header";
import Users from "./Users/Users";
import Form from "./Form/Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <>
      <BrowserRouter location={history.location} navigator={history}>
        <Header />

        <Routes>
          <Route path="/users/new" element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
