import { useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BsInputCursor } from 'react-icons/bs'
// Styles
import styles from './DeveloperDetailsForm.module.scss'
// Components
import FormInput from '../elements/FormInput'
// Helpers
import { developerDetailsValidation } from '@/helpers/clientValidations'

export default function DeveloperDetailsForm ({ data, setData, isTouched, setIsTouched, errors, setErrors }) {
  
  const onChange = event => {
    setData(prevState => ({ ...prevState, [event.target.name]: event.target.value }))
    setIsTouched(prevState => ({ ...prevState, [event.target.name]: true }))
  }
  
  useEffect(() => {
    setErrors(developerDetailsValidation(data))
  }, [data, isTouched])
  
  return (
    <div className='formContainer'>
      <h6 className="formTitle">
        <AiOutlineUser/>
        <span>Developer Details</span>
      </h6>
      <FormInput
        id='firstName'
        title='First Name'
        type='text'
        name='firstName'
        value={data.firstName}
        onChange={onChange}
        isTouched={isTouched.firstName}
        error={errors.firstName}
        showEmoji={true}
        required={true}
      />
      <FormInput
        id='lastName'
        title='Last Name'
        type='text'
        name='lastName'
        value={data.lastName}
        onChange={onChange}
        isTouched={isTouched.lastName}
        error={errors.lastName}
        showEmoji={true}
        required={true}
      />
      <FormInput
        id='job'
        title='Job Title'
        type='text'
        name='job'
        value={data.job}
        onChange={onChange}
        isTouched={isTouched.job}
        error={errors.job}
        showEmoji={true}
        required={true}
      />
      <FormInput
        id='phone'
        title='Phone Number'
        type='text'
        name='phone'
        value={data.phone}
        onChange={onChange}
        isTouched={isTouched.phone}
        error={errors.phone}
        showEmoji={true}
        required={true}
      />
      <FormInput
        id='email'
        title='Email Address'
        type='email'
        name='email'
        value={data.email}
        onChange={onChange}
        isTouched={isTouched.email}
        error={errors.email}
        showEmoji={true}
        required={false}
        style={{ marginBottom: 0 }}
      />
    </div>
  )
}