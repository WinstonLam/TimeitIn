import React, { useState } from "react";
import { ReactComponent as TimeSVG } from "./images/widgetIcons/time.svg";
import { ReactComponent as CalenderSVG } from "./images/widgetIcons/calendar.svg";

import { UserScreenWidgetsProps } from "./interfaces";
import "./Styles/UserScreenWidgets.css";



const UserScreenWidgets = (options: UserScreenWidgetsProps) => {
    const date = new Date();
    const dateOptions: any = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const [widgets, setWidgets] = useState([
        { title: "Start Time", icon: <TimeSVG className="widget-icon" />, description: options.time },
        { title: "End Time", icon: <TimeSVG className="widget-icon" />, description: "" },
        { title: "Date", icon: <CalenderSVG className="widget-icon" />, description: date.toLocaleDateString("nl-NL", dateOptions) }
    ]);

    return (
        <>
            <div className="user-screen-widgets-container">
                {widgets.map((widget) => {
                    return (
                        <div className={`widget ${widget.title}`}>
                            <div className="widget-content">
                                <div className="widget-title">{widget.title}</div>
                                <div className="widget-icons">{widget.icon}</div>
                                <div className="widget-description">{widget.description}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default UserScreenWidgets;