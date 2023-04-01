import axios from 'axios'
import { useRouter } from 'next/router'
// Styles
import styles from './DeveloperDetailsPage.module.scss'
// Components
import Button from '../elements/Button'
// Helpers
import { levelValueToLabel } from '@/helpers/functions'

export default function DeveloperDetailsPage ({ developer }) {
  
  const router = useRouter()
  
  const deleteHandler = id => {
    axios.delete(`/api/developer/${id}`)
      .then(res => {
        router.push('/')
      })
      .catch(err => console.log(err))
  }
  
  return (
    <>
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
        <Button href={`/developer/edit/${developer._id}`} className={styles.edit}>Edit</Button>
      </div>
      
    </>
  )
}