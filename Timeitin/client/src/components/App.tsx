import React from "react";
import Header from "./Header";
import Users from "./Users";
import Home from "./Home";
import AdminSetup from "./AdminSetup";
import UserCreation from "./UserCreation";
import UserUpdate from "./UserUpdate";
import UserScreen from "./UserScreen";
import UserRedirect from "./UserRedirect";
import Settings from "./Settings";
import GeneralSettings from "./GeneralSettings";
import HoursSettings from "./HoursSettings";
import VisualSettings from "./VisualSettings";
import WidgetsSettings from "./WidgetsSettings";
import TimeInSettings from "./TimeInSettings";
import UsersSettings from "./UsersSettings";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/404" element={<UserRedirect />} />
          <Route path="/user/:id" element={<UserScreen />} />
          <Route path="/setup" element={<AdminSetup />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/new" element={<UserCreation />} />
          <Route path="/users/edit/:id" element={<UserUpdate />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/settings/general" element={<GeneralSettings />} />
          <Route path="/settings/hours" element={<HoursSettings />} />
          <Route path="/settings/users" element={<UsersSettings />} />
          <Route path="/settings/timein" element={<TimeInSettings />} />
          <Route path="/settings/widgets" element={<WidgetsSettings />} />
          <Route path="/settings/visual" element={<VisualSettings />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
