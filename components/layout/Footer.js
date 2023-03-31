// Styles
import styles from './Footer.module.scss'

export default function Footer () {
  return (
    <header className={styles.footer}>
      <div className='container'>
        <div className={styles.container}>
          <p>
            This Website Create by
            <a href="https://github.com/rezsbt">Reza Sabet</a>
            <span className={styles.line}>|</span> 2022 - 2024 &copy;
          </p>
        </div>
      </div>
    </header>
  )
}