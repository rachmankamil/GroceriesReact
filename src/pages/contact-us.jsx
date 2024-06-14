import React from "react"

function ContactUsPage() {
    return (
        <div>
            <h1>Contact Us</h1>
            <p>Please fill this form to concern your problem, we will answer soon.</p>

            <form action="">
                <label htmlFor="nameInput">Name : </label>
                <input type="text" name="name" id="nameInput" />
                <br />
                <label htmlFor="emailInput">Email : </label>
                <input type="email" name="email" id="emailInput" />
                <br />
                <label htmlFor="messageArea">Message : </label>
                <textarea name="message" id="messageArea"></textarea>
                <br />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default ContactUsPage