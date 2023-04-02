import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import axios from "axios"
// Styles
import styles from './EditDeveloperPage.module.scss'
// Components
import DeveloperDetailsForm from "../modules/DeveloperDetailsForm"
import DeveloperSkillsForm from "../modules/DeveloperSkillsForm"
import Button from "../elements/Button"

const initialData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  job: '',
  skills: [],
}
const initialIsDetailsTouched = {
  firstName: false,
  lastName: false,
  phone: false,
  email: false,
  job: false,
}
const initialDetailsErrors = {}

export default function EditDeveloperPage ({ developer }) {
  
  const [data, setData] = useState(developer)
  const [isDetailsTouched, setIsDetailsTouched] = useState(initialIsDetailsTouched)
  const [detailsErrors, setDetailsErrors] = useState(initialDetailsErrors)
  const [skillsError, setSkillsError] = useState(false)
  
  const router = useRouter()
  
  useEffect(() => {
    if (!!data.skills.length) setSkillsError(false)
  }, [data])
  
  const createHandler = async () => {
    if (!data.skills.length) setSkillsError(true)
    else setSkillsError(false)
    
    if (!Object.keys(detailsErrors).length && !!data.skills.length) {
      await axios.patch(`/api/developer/${developer._id}`, { data, })
        .then(res => {
          router.push('/')
        })
        .catch(err => console.log(err))
    }
  }
  
  return (
    <>
      <h2 className='pageTitle'>Edit Developer</h2>
      <DeveloperDetailsForm
        data={data}
        setData={setData}
        isTouched={isDetailsTouched}
        setIsTouched={setIsDetailsTouched}
        errors={detailsErrors}
        setErrors={setDetailsErrors}
      />
      <DeveloperSkillsForm
        data={data.skills}
        setData={newSkills => setData(prevState => ({...prevState, skills: newSkills}))}
        error={skillsError}
      />
      <div className={styles.buttonsContainer}>
        <Button href='/' className={styles.cancel} variant='transparent'>Cancel</Button>
        <Button onClick={createHandler} className={styles.create}>Create Developer</Button>
      </div>
    </>
  )
}