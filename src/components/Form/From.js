import React, { useState, useEffect } from 'react'

const From = () => {
  const initialValues = {
    username: '',
    billing: '',
    delivery: '',
    telephone: '',
    currentDate: '',
  }
  const [formValues, setFormValues] = useState(initialValues)
  const [formErrors, setFormErrors] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormErrors(validate(formValues))
    setIsSubmit(true)
    setFormValues({
      username: '',
      billing: '',
      delivery: '',
      telephone: '',
      currentDate: '',
    })
  }

  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues)
    }
  }, [formErrors])
  const validate = (values) => {
    const errors = {}
    const regex = /^[0-9]{10}$/g
    if (!values.username) {
      errors.username = 'Username is required!'
    }
    if (!values.billing) {
      errors.billing = 'billing address is required!'
    }
    if (!values.delivery) {
      errors.delivery = 'delivery address is required!'
    }
    if (!values.telephone) {
      errors.telephone = 'telephone number is required'
    } else if (!regex.test(values.telephone)) {
      errors.telephone = 'This is not a valid telephone format!'
    }
    if (!values.currentDate) {
      errors.currentDate = 'Current Date is required'
    }
    return errors
  }

  return (
    <div className='container'>
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className='ui message success'>Checkout is successfully</div>
      ) : (
        ''
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'>
          <div className='field'>
            <label>Username</label>
            <input
              type='text'
              name='username'
              placeholder='Username'
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className='field'>
            <label>Billing Address</label>
            <input
              type='text'
              name='billing'
              placeholder='Billing Address'
              value={formValues.billing}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.blling}</p>
          <div className='field'>
            <label>Delivery Address</label>
            <input
              type='text'
              name='delivery'
              placeholder='Delivery Address'
              value={formValues.delivery}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.delivery}</p>
          <div className='field'>
            <label>Telephon Address</label>
            <input
              type='text'
              name='telephone'
              placeholder='Telephone Number'
              value={formValues.telephone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.telephone}</p>
          <div className='field'>
            <label>Current Date</label>
            <input
              type='text'
              name='currentDate'
              placeholder='Current Date'
              value={formValues.currentDate}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.currentDate}</p>
          <button className='fluid ui button blue'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default From
