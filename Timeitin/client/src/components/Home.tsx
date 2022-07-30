import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAdmin, selectUsers } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchAdmin, fetchUsers } from "../actions";
import Button from "././Button";
import AutoComplete from "./Autocomplete";

import "./Styles/Home.css";
import TimeitinLogo from "./images/TimeitinLogo.png";


const Home = () => {
    const dispatch = useAppDispatch();
    const fetchedAdmin: any = useSelector(selectAdmin);
    const fetchedUsers: any = useSelector(selectUsers);
    const [admin, setAdmin] = useState(null);
    const [users, setFetchedUsers] = useState([]);

    useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
    useEffect(() => { dispatch(fetchUsers()) }, [dispatch]);
    useEffect(() => { setAdmin(fetchedAdmin) }, [fetchedAdmin]);
    useEffect(() => { setFetchedUsers(fetchedUsers) }, [fetchedUsers]);

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
                    <AutoComplete {...users} />
                    <Button text="Click here to login" />
                </>
            }
        </div>
    );

}

export default Home;