import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectAdmin } from "./strore";
import { useAppDispatch } from "./hooks";
import { fetchAdmin } from "../actions";
import Button from "././Button";
import "./Styles/Home.css";
import TimeitinLogo from "./images/TimeitinLogo.png";
import AuthModal from "./AuthModal";

const Home = () => {
    const dispatch = useAppDispatch();
    const fetchedAdmin: any = useSelector(selectAdmin);
    const [admin, setAdmin] = useState(null);

    useEffect(() => { dispatch(fetchAdmin()) }, [dispatch]);
    useEffect(() => { setAdmin(fetchedAdmin) }, [fetchedAdmin]);

    if (fetchedAdmin.length === 0) return

    return (<>
        <div className="home-container">
            <div className="timeitin-logo"> <img

                src={TimeitinLogo}
                alt="timeitin logo"
            /></div>
            <AuthModal
                onAuthorization={true}
                clear={() => { }}
                setOnAuthorization={() => { }}
                currentPath="/"
                successAuthPath="/"
            />
            {!admin ?
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