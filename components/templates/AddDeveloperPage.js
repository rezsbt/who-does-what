import { useState } from "react"
// Components
import DeveloperDetailsForm from "../modules/DeveloperDetailsForm"

const initialData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  job: '',
  skills: [],
}
const initialIsTouched = {
  firstName: false,
  lastName: false,
  phone: false,
  email: false,
  job: false,
}
const initialErrors = {}

export default function AddDeveloperPage () {
  
  const [data, setData] = useState(initialData)
  const [isTouched, setIsTouched] = useState(initialIsTouched)
  const [errors, setErrors] = useState(initialErrors)
  
  return (
    <>
      <h2 className='pageTitle'>Add Developer</h2>
      <DeveloperDetailsForm
        data={data}
        setData={setData}
        isTouched={isTouched}
        setIsTouched={setIsTouched}
        errors={errors}
        setErrors={setErrors}
      />
    </>
  )
}