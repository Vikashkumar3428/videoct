import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import "./Login.css";
import {Link,useHistory} from 'react-router-dom';
import Footer from './Footer';

  

export default function Login() {
  
  return (
    <>
    <section id="template-4">
    <form action="/" method="post">
        <div style={{textalign: 'center'}}>
                    <span>
                        <img src="https://img.icons8.com/bubbles/100/000000/happy-man.png" alt="logo" width="80" />
                        <h1>Get Your Membership</h1>
                    </span>
        </div>
        <div>
            <label for="firstname">First Name</label>
            <input type="text" id="firstname" name="first" required />
            <label for="lastname">Last Name</label>
            <input type="text" id="lastname" name="last" required/>
            <label for="e-mail">Email</label>
            <input type="email" id="e-mail" name="mail" required/>
            <button onClick={event =>  window.location.href='/'}   type="submit">Sign Me Up!</button>
        </div>
    </form>
</section>
</>
  );
}