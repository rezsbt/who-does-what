// Styles
import styles from './SelectLevel.module.scss'

export default function SelectLevel ({ level, onChange }) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Select Level</p>
      <div className={styles.levels}>
        <span className={`${styles.level} ${level === 'BASIC' ? styles.active : ''}`} onClick={() => onChange('BASIC')}><span>Basic</span></span>
        <span className={`${styles.level} ${level === 'INTERMEDIATE' ? styles.active : ''}`} onClick={() => onChange('INTERMEDIATE')}><span>Intermediate</span></span>
        <span className={`${styles.level} ${level === 'ADVANCED' ? styles.active : ''}`} onClick={() => onChange('ADVANCED')}><span>Advanced</span></span>
      </div>
    </div>
  )
}