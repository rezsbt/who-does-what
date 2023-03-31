// Styles
import DeveloperCard from '../modules/DeveloperCard'
import styles from './HomePage.module.scss'

export default function HomePage ({ data }) {
  
  return (
    <>
    
      <h2 className='pageTitle'>Developers List</h2>
      
      <div className={styles.developers}>
        {data.map(item => <DeveloperCard key={item._id} {...item}/>)}
      </div>
      
    </>
  )
}