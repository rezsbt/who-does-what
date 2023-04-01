import { useState, useEffect } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
// Styles
import styles from './DeveloperSkillsForm.module.scss'
// Components
import FormInput from '../elements/FormInput'
import SelectLevel from './SelectLevel'
import Button from '../elements/Button'
import Skills from './Skills'
// Helpers
import { developerSkillsValidation } from '@/helpers/clientValidations'

const initialFormData = {
  title: '',
  level: 'BASIC',
}
const initialIsTouched = {
  title: false,
  level: false,
}
const initialErrors = {}

export default function DeveloperSkillsForm ({ data, setData, error }) {
  
  const [formData, setFormData] = useState(initialFormData)
  const [isTouched, setIsTouched] = useState(initialIsTouched)
  const [errors, setErrors] = useState(initialErrors)
  
  const onChange = event => {
    setFormData(prevState => ({ ...prevState, [event.target.name]: event.target.value}))
    setIsTouched(prevState => ({ ...prevState, [event.target.name]: true}))
  }
  
  useEffect(() => {
    setErrors(developerSkillsValidation(formData))
  }, [formData, isTouched])
  
  const clearHandler = () => {
    setFormData(initialFormData)
    setIsTouched(initialIsTouched)
    setErrors(initialErrors)
  }
  
  const addHandler = () => {
    if (!Object.keys(errors).length) {
      setData([...data, formData])
      clearHandler()
    }
  }
  
  return (
    <div className="formContainer">
      <h6 className="formTitle">
        <AiOutlineUser/>
        <span>Developers Skills</span>
      </h6>
      <Skills data={data} setData={setData}/>
      {!!error && (
        <div className={styles.error}>
          <p>First add skill</p>
        </div>
      )}
      <div className="formRow">
        <FormInput
          id='title'
          title='Skill Title'
          type='text'
          name='title'
          value={formData.title}
          onChange={onChange}
          isTouched={isTouched.title}
          error={errors.title}
          showEmoji={true}
          required={true}
        />
        <SelectLevel level={formData.level} onChange={value => setFormData(prevState => ({...prevState, level: value}))}/>
      </div>
      <div className={styles.buttonsContainer}>
        <Button onClick={clearHandler} className={styles.cancel} variant='transparent'>Clear</Button>
        <Button onClick={addHandler} className={styles.create} variant='outline'>Add Skill</Button>
      </div>
    </div>
  )
}