import React from "react";
import { useNavigate } from "react-router-dom";

import "./Styles/Settings.css";
import { ReactComponent as GeneralIcon } from "./images/settingsicons/general.svg";
import { ReactComponent as UserIcon } from "./images/settingsicons/user.svg";
import { ReactComponent as VisualIcon } from "./images/settingsicons/visual.svg";
import { ReactComponent as WidgetsIcon } from "./images/settingsicons/widgets.svg";
import { ReactComponent as HoursIcon } from "./images/widgetIcons/calendar.svg";
import { ReactComponent as TimeIcon } from "./images/widgetIcons/time.svg";


const Settings = () => {
    let navigate = useNavigate();

    return <div className="settings-container">
        <div className="settings-inner">
            <div className="settings-widget general" onClick={() => { navigate("/settings/general") }}>
                <GeneralIcon className="settings-icon general" />
                General
            </div>
            <div className="settings-widget hours" onClick={() => { navigate("/settings/hours") }}>
                <HoursIcon className="settings-icon hours" />
                Hours
            </div>
            <div className="settings-widget users" onClick={() => { navigate("/settings/users") }}>
                <UserIcon className="settings-icon users" />
                Users
            </div>
            <div className="settings-widget timein" onClick={() => { navigate("/settings/timein") }}>
                <TimeIcon className="settings-icon timein" />
                Time In
            </div>
            <div className="settings-widget widgets" onClick={() => { navigate("/settings/widgets") }}>
                <WidgetsIcon className="settings-icon widgets" />
                Widgets
            </div>
            <div className="settings-widget visual" onClick={() => { navigate("/settings/visual") }}>
                <VisualIcon className="settings-icon visual" />
                Visual
            </div>
        </div>
    </div>;
}

export default Settings;