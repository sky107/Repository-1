
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUserLoginAction, postUserRegisterAction } from '../store/actions';
import { useHistory } from 'react-router-dom';

export default () => {

    const dispatch = useDispatch();

    const history = useHistory();


    const [authButtons, setAuthButtons] = useState(false);
    const [name, setName] = useState(false);
    const [email, setEmail] = useState('siddharthsk101@gmail.com');
    const [password, setPassword] = useState('123456');
    const [loading, setLoading] = useState(false);


    const handleLogin = () => {
        setLoading(true);
        dispatch(postUserLoginAction({
            email: email,
            password: password
        }, () => {
            setLoading(false);
            window.location.assign('/');
        }))
    }
    const handleRegister = () => {
        alert("Registratoin working but not required here")
        // dispatch(postUserRegisterAction({
        //     name:name,
        //     email:email,
        //     password:password
        // }))
    }
    return <>
        <div className='App'>

            {!authButtons ? <button className="primary-button" onMouseOver={() => setAuthButtons(true)} >{"GET STARTED"}</button>
                : <div> <button disabled={loading} className="primary-button" onMouseLeave={() => setAuthButtons(false)} onClick={() => handleLogin()}>{loading ? "Please wait" : "Login"}</button>&nbsp;&nbsp;
                    <button className="secondary-button" onMouseLeave={() => setAuthButtons(false)} onClick={() => handleRegister()}>Register</button>
                </div>}
        </div>
    </>
}