import { useRef, useEffect } from 'react'
import { useForm } from '../hooks/useForm'

export const ContactForm = () => {

    const focusRef = useRef()

    const initialForm = {
        email: '',
        matter: '',
        message: ''
    }

    const { formState, email, matter, message, onInputChange } = useForm(initialForm)

    const onSubmit = () => {
        event.preventDefault()
        console.log(formState)
    }

    useEffect(() => {
        focusRef.current.focus()
    }, [])

    return (
        <>
            <div className="container contact-form">
                <h1 className="title">Contact us</h1>
                <br /><br />
                <form onSubmit={onSubmit}>
                    <div className="mb-3 input-field">
                        <input ref={focusRef} type="email" className="form-control" placeholder="Email" name="email" value={email} onChange={onInputChange}></input>
                    </div>
                    <div className="mb-3 input-field">
                        <input type="text" className="form-control" placeholder="Matter" name="matter" value={matter} onChange={onInputChange}></input>
                    </div>
                    <div className="mb-3 input-field">
                        <input type="text" className="form-control" placeholder="Message" name="message" value={message} onChange={onInputChange}></input>
                    </div>
                    <div className="btn contact-action">
                        <button type="submit" className="btn contact-action">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}
