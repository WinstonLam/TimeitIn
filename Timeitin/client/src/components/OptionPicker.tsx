import React, { useLayoutEffect, useRef, useState } from "react";

import "./Styles/OptionPicker.css";


interface OptionPickerProps {
    options: any[];
    onClick: () => void;
}

const OptionPicker = ({ options, onClick }: OptionPickerProps) => {
    const ref = useRef(null);

    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        setWidth(ref.current.offsetWidth);
        console.log(width);
    }, [options]);


    return (<div className="option-picker-container">
        <div className="option-picker-wrapper">
            <div className="option-picker" >
                {options.map((option: any, index: number) => {
                    return <div ref={ref} className="option-picker-item" key={index} onClick={onClick}>{option}</div>
                })}

            </div>
            <div className="option-picker-selector" style={{ width: width + "px" }}></div>
        </div>
    </div>)
}

export default OptionPicker;