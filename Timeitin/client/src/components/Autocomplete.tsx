import React, { useEffect, useState } from "react";
import { ReactComponent as Dropdown } from "./images/dropdown.svg";

import "./Styles/AutoComplete.css";

const AutoComplete = (options: Array<any>) => {
    const [inputState, setInputState] = useState({
        value: "",
        hide: false,
        focus: false,
        selection: false,
        show: false
    });
    const optionList = (Object.values(options))


    useEffect(() => {
        if ((inputState.hide || inputState.focus)) {
            setInputState({ ...inputState, show: true })
        } else {
            setInputState({ ...inputState, show: false })
        }
    }, [inputState.focus, inputState.hide, inputState.selection]);

    const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
        setInputState({ ...inputState, focus: !inputState.focus })
    }

    const handleAutoFill = (e: React.AnimationEvent<HTMLInputElement>) => {
        setInputState({ ...inputState, hide: e.animationName === "onAutoFillStart" });
    }

    const handleSelection = (e: React.MouseEvent<HTMLDivElement>, option: any) => {
        setInputState({ ...inputState, value: option.firstname, selection: true })
    }

    const handleMouseLeave = (e: React.MouseEvent<HTMLLabelElement>) => {
        setInputState({ ...inputState, focus: false, selection: false })
    }

    return (

        <label className="input-container"
            // Use mouse events to decide if input is focussed or not
            onMouseLeave={handleMouseLeave}
        >
            <input className={`auto-complete ${inputState.show ? "show" : ""}`}
                value={inputState.value}
                type="text"
                maxLength={20}
                name="name"
                onAnimationStart={handleAutoFill}
                onClick={handleOnClick}
                onChange={(e) => setInputState({ ...inputState, value: e.target.value })} />
            <span className={`label ${inputState.value ? "show" : ""}`} >Select your name</span>
            <Dropdown className={`icon ${inputState.show ? "show" : ""}`} />

            <div className={`options-wrapper ${inputState.show ? "show" : ""}`}>
                <div className="options">
                    {optionList.map((option) => {
                        return (
                            <div className="option"
                                key={option._id}
                                onClick={(e) => handleSelection(e, option)}>
                                {option.firstname}
                                <hr style={{ width: "220px", border: "1px solid aliceblue" }} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </label>


    );

}
export default AutoComplete;

