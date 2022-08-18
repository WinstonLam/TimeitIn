import React, { useEffect, useState } from "react";
import { ReactComponent as Dropdown } from "./images/dropdown.svg";

import "./Styles/AutoComplete.css";

const AutoComplete = (props: { options: Array<any>, setValue: any }) => {

    const [inputState, setInputState] = useState({
        value: "",
        hide: false,
        focus: false,
        selection: false,
        show: false
    });
    const [mouseLeave, setMouseLeave] = useState(true);
    const optionList = (Object.values(props.options))


    useEffect(() => {
        if ((inputState.hide || inputState.focus)) {
            setInputState({ ...inputState, show: true })
        } else {
            setInputState({ ...inputState, show: false })
        }
    }, [inputState.focus, inputState.hide, inputState.selection]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputState({ ...inputState, value: e.target.value })
        if (e.target.value.length === 0) {
            props.setValue(null)
        }
    }

    const handleOnClick = (e: React.MouseEvent<HTMLInputElement>) => {
        setInputState({ ...inputState, focus: !inputState.focus })
    }

    const handleAutoFill = (e: React.AnimationEvent<HTMLInputElement>) => {
        setInputState({ ...inputState, hide: e.animationName === "onAutoFillStart" });
    }

    const handleSelection = (e: React.MouseEvent<HTMLDivElement>, option: any) => {
        setInputState({ ...inputState, value: option.firstname, selection: true })
        props.setValue(option)
    }

    const handleBlur = () => {
        if (mouseLeave) setInputState({ ...inputState, focus: false })
    }


    return (
        <div className="input-container"
        // Use mouse events to decide if input is focussed or not
        >
            <label>
                <div className="auto-complete-wrapper">
                    <input className={`auto-complete ${inputState.show ? "show" : ""}`}
                        value={inputState.value}
                        type="text"
                        maxLength={20}
                        name="name"
                        onAnimationStart={handleAutoFill}
                        onClick={handleOnClick}
                        onBlur={handleBlur}
                        onChange={handleChange} />
                </div>
                <span className={`label ${inputState.value ? "show" : ""}`} >Select your name</span>
                <Dropdown className={`dropdown-icon ${inputState.show ? "show" : ""}`} />

                <div className={`options-wrapper ${inputState.show ? "show" : ""}`}
                    onMouseLeave={() => setMouseLeave(true)}
                    onMouseEnter={() => setMouseLeave(false)}>
                    <div className="options">
                        {optionList.filter((option) => {
                            const searchTerm = inputState.value.toLowerCase();
                            return option.firstname.startsWith(searchTerm)
                        })
                            .map((option) => {
                                return (
                                    <div className="option"
                                        key={option._id}
                                        onClick={(e) => handleSelection(e, option)}>
                                        {option.firstname}
                                        <hr style={{ width: "100%", border: "1px solid aliceblue" }} />
                                    </div>)
                            })}
                    </div>
                </div>
            </label>
        </div>


    );

}
export default AutoComplete;

