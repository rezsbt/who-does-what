import { AiOutlineInfoCircle } from 'react-icons/ai'
// Styles
import styles from './DeveloperCard.module.scss'
// Components
import Button from '../elements/Button'

export default function DeveloperCard ({ firstName, lastName, job, _id }) {
  return (
    <article className={styles.container}>
      <div className={styles.content}>
        <h6 className={styles.fullName}>{`${firstName} ${lastName}`}</h6>
        
        <span className={styles.job}>{job}</span>
      </div>
      <Button href={`/developer/details/${_id}`} icon={<AiOutlineInfoCircle/>} className={styles.infoButton}/>
    </article>
  )
}