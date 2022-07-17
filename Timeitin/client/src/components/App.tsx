import React from "react";
import Header from "./Header";
import Users from "./Users";
import Form from "./Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<Form />} />
          <Route path="/users/edit/:id" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
