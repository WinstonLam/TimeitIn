import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { selectAdmin, selectUsers } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchAdmin, fetchUsers, setUser } from "../actions";
import { PinInput } from 'react-input-pin-code';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from "././Button";
import AutoComplete from "./Autocomplete";


import "./Styles/Home.css";
import TimeitinLogo from "./images/TimeitinLogo.png";


const Home = () => {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const fetchedAdmin: any = useSelector(selectAdmin);
    const fetchedUsers: any = useSelector(selectUsers);
    const [admin, setAdmin] = useState(null);
    const [users, setFetchedUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [mask, setMask] = useState(true);
    const [pin, setPin] = useState(['', '', '', '', '']);
    const [pinError, setPinError] = useState({ message: "", color: "rgb(220, 53, 69)" });


    useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
    useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
    useEffect(() => { setAdmin(fetchedAdmin) }, [fetchedAdmin]);
    useEffect(() => { setFetchedUsers(fetchedUsers) }, [fetchedUsers]);
    useEffect(() => {
        if (selectedUser) {
            if (pin.join("") === selectedUser.pincode) {
                setPinError({ ...pinError, color: "" });
                handleSubmit();
            } else if (pin.filter(number => number).length === 5) {
                setPinError({ ...pinError, color: "rgb(220, 53, 69)", message: "Incorrect pin code" })
            } else {
                setPinError({ ...pinError, color: "", message: "" })
            }
        }
    }, [pin]);

    const handleSubmit = () => {
        dispatch(setUser(selectedUser));
        navigate("/user/" + selectedUser._id, { state: { user: selectedUser } });
    }

    const handleChange = (values: string[], setPinError: any, pinError: any) => {
        setPin(values)
    }

    if (!admin) return

    return (
        <div className="home-container">
            <div className="timeitin-logo"> <img

                src={TimeitinLogo}
                alt="timeitin logo"
            /></div>
            {admin.length === 0 ?
                <>
                    <p>Welcome to Timeitin let's get you setup</p>
                    <Button text="Click here to setup" link="/setup" />
                </>
                :
                <>
                    <p>Welcome to Timeitin</p>
                    <AutoComplete options={users} setValue={setSelectedUser} />
                    <div className={`user-login-pincode ${selectedUser ? "show" : ""}`}>
                        <p>Enter your pin code</p>
                        <div className="pincode-container">
                            <div className="visibility-auth" onClick={(e) => { setMask(!mask) }}>
                                {mask ? <VisibilityOffIcon htmlColor="black" /> : <VisibilityIcon htmlColor="black" />}
                            </div>
                            <PinInput
                                placeholder=""
                                validBorderColor={pinError.color}
                                values={pin}
                                mask={mask}
                                onChange={(value, index, values) => { handleChange(values, setPinError, pinError) }}
                                inputStyle={{ fontSize: "23px", color: "black", height: "50px", width: "50px", borderColor: "black", borderRadius: "3rem", backgroundColor: "transparent" }}
                            />
                            <div className='pininput-helpertext'>
                                {pinError.message ? pinError.message : <span>&nbsp;&nbsp;</span>}
                            </div>
                        </div>
                    </div>

                </>
            }
        </div>
    );

}

export default Home;