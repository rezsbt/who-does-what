import Link from 'next/link'
import { AiOutlinePlus } from 'react-icons/ai'
// Styles
import styles from './Header.module.scss'
import Button from '../elements/Button'

export default function Header () {
  return (
    <header className={styles.header}>
      <div className='container'>
        <div className={styles.container}>
          <Link href='/' className={styles.logo}>
            <h1>Who Does What?</h1>
          </Link>
          <Button href='/add-developer' icon={<AiOutlinePlus/>}>Add Developer</Button>
        </div>
      </div>
    </header>
  )
}