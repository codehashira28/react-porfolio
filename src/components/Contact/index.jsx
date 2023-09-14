import './styles.css';

import { useState } from 'react';


function ErrorMessage() {
    return (
        <p className='fw-bold mt-3 mb-0'>Your email is invalid</p>
    )
}

function validate(setEmailCheck) {
    if(document.getElementById('email').value != "" && !document.getElementById('email').value.match(/@.+$/)) {
        setEmailCheck(true)
    } 
    else {
        setEmailCheck(false)
    }
}

function Contact() { 
    const [emailCheck, setEmailCheck] = useState(false);
    return (
        <div className="p-5" id="contact">
            <h2>Contact</h2>
            <form className='d-flex flex-column gap-2'>
                <label htmlFor="name">Name:</label>
                <input required type="text" id="name"/>
                <label htmlFor="email">Email:</label>
                <input id="email" onBlur={() => validate(setEmailCheck)} required type="email" />
                <label htmlFor="message">Message:</label>
                <textarea required rows="6" id="message"></textarea>
                {emailCheck && <ErrorMessage />}
                <button id="submit" className="mt-3 px-2 align-self-start" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact;
