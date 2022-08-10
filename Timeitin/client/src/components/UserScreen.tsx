import React, {useEffect, useState} from 'react';
import { useAppDispatch } from './hooks';
import { useParams } from "react-router-dom";
import { fetchUser } from '../actions';
import { selectUsers } from "./strore";
import { useSelector } from 'react-redux';

const UserScreen = () => {
    const [user, setUser] = useState({});
    const userId = useParams().id;
    const users: any = useSelector(selectUsers);
    const dispatch = useAppDispatch();
    useEffect(() => { dispatch(fetchUser(userId)) }, [dispatch]);
    useEffect(() => {
      const selectedUser = users.find((user: any) => user._id === userId)
        if (selectedUser) setUser(selectedUser);
    }, [users]);

    console.log(user);
    return (<div>UserScreen</div>);
}

export default UserScreen;