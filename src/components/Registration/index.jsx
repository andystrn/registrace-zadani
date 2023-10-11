import React, { useState } from 'react';
import './style.css'

const Registration = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        paswordConfirm: '',
    })

    const [validEmail, setValidEmail] = useState(true);
    const [validPasswords, setValidPasswords] = useState(true)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!(user.email.includes('@'))) {
            setValidEmail(false)
            alert('Registration was not succesfull.')
        } else if
        (user.password !== user.paswordConfirm) {
            setValidPasswords(false);
            alert('Registration was not succesfull.')
        } else {
            console.log(user);
            setValidEmail(true)
            setValidPasswords(true);
            setUser({...user, 
            username: '',
            email: '',
            password: '',
            paswordConfirm: '',})
            alert('Registration was succesfull.')
        }
    }
    
    return (
    <>
        <h1>Registration</h1>
        <div className='container'>
            <div className='imageBox'>
                <img width="150" height="150" src="https://img.icons8.com/material-rounded/150/2A6270/user.png" alt="user"/>
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Email Address'
                    value={user.email}
                    onChange={(e) => {
                        (!(e.target.value.includes('@'))) ? setValidEmail(false) : setValidEmail(true)
                        setUser({...user, email: e.target.value})}
                    }
                    onBlur={(e) => {
                        if(user.username === '') {
                            validEmail ? setUser({...user, username: e.target.value.substring(0, user.email.indexOf('@'))}) : null
                        }
                    }}
                />
                {!validEmail ? <div className='alert'>Unknown email</div> : null}
                <input
                    type="text"
                    placeholder='User Name'
                    value={user.username}
                    onChange={(e) => setUser({...user, username: e.target.value})}
                />
                <input
                    type="password"
                    placeholder='Password'
                    value={user.password}
                    onChange={(e) => setUser({...user, password: e.target.value})}
                />
                <input
                    type="password"
                    placeholder='Confirm Password'
                    value={user.paswordConfirm}
                    onChange={(e) => setUser({...user, paswordConfirm: e.target.value})}
                />
                {!validPasswords ? <div className='alert'>Passwords does not match.</div> : null}
                <button type='submit'>REGISTER</button>
            </form>
        </div>
        </>
    )
}

export default Registration;