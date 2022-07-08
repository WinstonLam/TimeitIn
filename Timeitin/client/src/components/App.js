import React from "react";
import Header from "./Header";
import Users from "./Users";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <div className="App">
      <BrowserRouter location={history.location} navigator={history}>
        <Header />

        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
