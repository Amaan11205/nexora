import { useState } from 'react'
import './Contact.css'

const emptyForm = { name: '', email: '', message: '' }

// Checks the form values and returns an object of error messages.
// An empty object means the form is valid.
function validate(values) {
  const errors = {}

  if (values.name.trim() === '') {
    errors.name = 'Enter your name.'
  }

  if (values.email.trim() === '') {
    errors.email = 'Enter your email address.'
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = 'Enter a valid email, like name@example.com.'
  }

  if (values.message.trim().length < 10) {
    errors.message = 'Write at least 10 characters so we know how to help.'
  }

  return errors
}

function Contact() {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Runs on every keystroke and stores what was typed
  const handleChange = (event) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault() // stop the page from reloading
    const newErrors = validate(values)
    setErrors(newErrors)

    // No errors: show the success message (there is no backend to send to)
    if (Object.keys(newErrors).length === 0) {
      setIsSubmitted(true)
      setValues(emptyForm)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__grid">
        <div>
          <h2>Request a demo.</h2>
          <p className="contact__text">
            Tell us about your team and we will show you how NEXORA fits the way you work.
          </p>
        </div>

        {isSubmitted ? (
          <div className="contact__success" role="status">
            <h3>Thanks, we got your message.</h3>
            <p>We will reply to your email soon.</p>
            <button type="button" className="btn btn-outline" onClick={() => setIsSubmitted(false)}>
              Send another message
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="form__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} />
              {errors.name && <p className="form__error">{errors.name}</p>}
            </div>

            <div className="form__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} />
              {errors.email && <p className="form__error">{errors.email}</p>}
            </div>

            <div className="form__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} />
              {errors.message && <p className="form__error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary">
              Send request
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default Contact
