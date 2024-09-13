import React from 'react';
import './Login.css';

export default function Login() {
  return(
    <div className='login-wrapper'>
        <h1>Please Log In</h1>
        <form>
            <label>
                <p>Username</p>
                <input type="text" required/>
            </label>
            <label>
                <p>Password</p>
                <input type="password" required/>
            </label>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}