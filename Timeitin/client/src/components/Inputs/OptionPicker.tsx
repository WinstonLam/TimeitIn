import React, { useLayoutEffect, useRef, useState, useEffect } from "react";

import "../Styles/OptionPicker.css";


interface OptionPickerProps {
    options: any[];
    onClick: (option: any) => void;
}

const OptionPicker = ({ options, onClick }: OptionPickerProps) => {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [optionIdx, setOptionIdx] = useState(0);

    useLayoutEffect(() => { setWidth(ref.current.offsetWidth) }, [ref]);

    useEffect(() => {
        onClick(selectedOption);
    }, [selectedOption]);

    const handleSelection = (option: any) => {
        setSelectedOption(option);
        let i = 0;
        for (i; i < options.length; i++) {
            if (options[i] === option) {
                setOptionIdx(i);
                return;
            }
        }
    }



    return (<div className="option-picker-container">
        <div className="option-picker-wrapper" style={{ width: (options.length * width) + "px" }} >
            <div className="option-picker" >
                {options.map((option: any, index: number) => {
                    return <div ref={ref} className="option-picker-item" key={index} onClick={() => handleSelection(option)}>{option}</div>
                })}

            </div>
            <div className="option-picker-selector" style={{ width: width + "px", transform: `TranslateX(${optionIdx * 150}px)` }}></div>
        </div>
    </div>)
}

export default OptionPicker;