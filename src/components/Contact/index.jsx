import './styles.css';

function Contact() {
    return (
        <div className="p-5" id="contact">
            <h2>Contact</h2>
            <form className='d-flex flex-column gap-2'>
                <label for="name">Name:</label>
                <input required type="text" id="name"/>
                <label for="email">Email:</label>
                <input id="email" required type="email" />
                <label for="message">Message:</label>
                <textarea required rows="6" id="message"></textarea>
                <button id="submit" className="mt-3 px-2 align-self-start" type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Contact;