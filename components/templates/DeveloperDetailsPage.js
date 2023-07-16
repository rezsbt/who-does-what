import axios from 'axios'
import { useRouter } from 'next/router'
// Styles
import styles from './DeveloperDetailsPage.module.scss'
// Components
import Button from '../elements/Button'
// Helpers
import { levelValueToLabel, defaultAjaxError } from '@/helpers/functions'

export default function DeveloperDetailsPage ({ developer, errorMessage }) {
  
  const router = useRouter()
  
  const deleteHandler = id => {
    if (!errorMessage) {
      axios.delete(`/api/developer/${id}`)
        .then(res => {
          router.push('/')
        })
        .catch(err => defaultAjaxError(err.request.status, err.message))
    }
    else {
      alert(errorMessage)
    }
  }
  
  const editHandler = id => {
    
  }
  
  return (
    <>
      {!!errorMessage && (
        <div className={styles.error}>
          {errorMessage}
        </div>
      )}
    
      <div className={`${styles.section} ${styles.details}`}>
        <p>First name: <span>{developer.firstName || '-'}</span></p>
        <p>Last name: <span>{developer.lastName || '-'}</span></p>
        <p>Job title: <span>{developer.job || '-'}</span></p>
        <p>Phone number: <span>{developer.phone || '-'}</span></p>
        <p>Email address: <span>{developer.email || '-'}</span></p>
      </div>
      
      <div className={`${styles.section} ${styles.skills}`}>
        {developer.skills.map(skill => (
          <article key={skill._id} className={styles.skill}>
            <p>{skill.title}</p>
            <p>{levelValueToLabel(skill.level)}</p>
          </article>
        ))}
      </div>
      
      <div className={`${styles.section} ${styles.buttons}`}>
        <Button onClick={() => deleteHandler(developer._id)} variant='outline' className={styles.delete}>Delete</Button>
        {!!errorMessage ? (
          <Button onClick={() => alert(errorMessage)} className={styles.edit}>Edit</Button>
        ) : (
          <Button href={`/developer/edit/${developer._id}`} onClick={() => editHandler(developer._id)} className={styles.edit}>Edit</Button>
        )}
      </div>
      
    </>
  )
}