// Styles
import styles from './Layout.module.scss'
// Components
import Header from './Header'
import Footer from './Footer'

export default function Layout ({ children }) {
  return (
    <div className={styles.body}>
      <Header/>
      <main className={`container ${styles.main}`}>
        {children}
      </main>
      <Footer/>
    </div>
  )
}