import React, { useState, useEffect } from "react";
import { ReactComponent as TimeSVG } from "./images/widgetIcons/time.svg";
import { ReactComponent as CalenderSVG } from "./images/widgetIcons/calendar.svg";
import { UserScreenWidgetsProps } from "./interfaces";
import "./Styles/UserScreenWidgets.css";



const UserScreenWidgets = (options: UserScreenWidgetsProps) => {

    const [widgets, setWidgets] = useState([
        { title: "Start Time", icon: <TimeSVG className="widget-icon" />, description: "" },
        { title: "End Time", icon: <TimeSVG className="widget-icon" />, description: "" },
        { title: "Date", icon: <CalenderSVG className="widget-icon" />, description: options.date }
    ]);

    useEffect(() => {
        // split the time string into an array of start and end time
        const splitTime = options.time.split(",");

        setWidgets(widgets.map(widget => {
            if (widget.title === "Start Time") {
                widget.description = splitTime[0];
            }
            if (widget.title === "End Time") {
                widget.description = splitTime[1];
            }
            return widget;
        }))
    }, [options])


    return (
        <>
            <div className="user-screen-widgets-container">
                {widgets.map((widget) => {
                    return (
                        <div key={`${widget.title}`} className={`widget ${widget.title}`}>
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