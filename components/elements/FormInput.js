import { BsEmojiDizzy, BsEmojiNeutral, BsEmojiLaughing } from 'react-icons/bs'
// Styles
import styles from './FormInput.module.scss'

export default function FormInput ({ id, title, icon, type, name, value, onChange, isTouched, error, showEmoji, required, className, style }) {
  
  const input = {
    valid:!!isTouched && !error,
    invalid: !!error && !!isTouched,
    default: !isTouched
  }
  
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <label htmlFor={id || ''} className={styles.label}>
        <p className={styles.title}>
          <span className={styles.titleText}>{title || name}</span>
          { !!required && <span className={styles.required}>(required)</span> }
        </p>
        <div className={`${styles.input} ${input.invalid && styles.invalid} ${input.valid && styles.valid}`}>
          {!!icon && <span className={styles.icon}>{icon}</span> }
          <input
            type={type || 'text'}
            name={name}
            id={id || ''}
            value={value}
            onChange={onChange}
          />
          { !!showEmoji && input.default && <span className={styles.emoji}><BsEmojiNeutral/></span> }
          { !!showEmoji && input.invalid && <span className={styles.emoji}><BsEmojiDizzy/></span> }
          { !!showEmoji && input.valid && <span className={styles.emoji}><BsEmojiLaughing/></span> }
        </div>
      </label>
      {input.invalid && <p className={styles.errorMessage}>{error}</p>}
    </div>
  )
}