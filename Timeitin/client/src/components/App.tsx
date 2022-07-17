import React from "react";
import Header from "./Header";
import Users from "./Users";
import UserCreation from "./UserCreation";
import UserUpdate from "./UserUpdate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<UserCreation />} />
          <Route path="/users/edit/:id" element={<UserUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
