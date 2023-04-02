import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
// Styles
import styles from './Skills.module.scss'
// Components
import Button from '../elements/Button'
// Helpers
import { levelValueToLabel } from '@/helpers/functions'

export default function Skills ({ data, setData }) {
  return (
    <div className={styles.container}>
      {data.map((skill, index) => <Skill {...skill} key={index} index={index} setData={setData} data={data} />)}
    </div>
  )
}

function Skill ({ title, level, index, _id, setData, data }) {
  
  const deleteHandler = (id, hasId) => {
    if (hasId) {
      setData([...data.filter(({_id}) => _id !== id)])
    }
    else {
      setData([...data.filter((item, index) => index !== id)])
    }
  }
  
  
  
  return (
    <article className={styles.skill}>
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.level}>{levelValueToLabel(level)}</p>
      </div>
      <div className={styles.buttons}>
        <Button icon={<AiOutlineDelete/>} className={styles.delete} onClick={() => deleteHandler(_id || index, !!_id)}/>
      </div>
    </article>
  )
}