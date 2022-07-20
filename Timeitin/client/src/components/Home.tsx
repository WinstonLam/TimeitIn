import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAdmin } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchAdmin } from "../actions";
import AdminSetup from "./AdminSetup";
import Button from "././Button";
import "./Styles/Home.css";
import TimeitinLogo from "./images/TimeitinLogo.png";

const Home = () => {
    const dispatch = useAppDispatch();
    const fetchedAdmin: any = useSelector(selectAdmin);
    const [admin, setAdmin] = useState(null);

    useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
    useEffect(() => { setAdmin(fetchedAdmin) }, [fetchedAdmin]);


    return (<>
        <div className="home-container">
            <div className="timeitin-logo"> <img

                src={TimeitinLogo}
                alt="timeitin logo"
            /></div>
            {admin ?
                <>
                    <p>Welcome to Timeitin let's get you setup</p>
                    <Button text="Click here to setup" link="/setup" />
                </>
                :
                <Button text="Click here to login" />}
        </div>
    </>);

}

export default Home;