import Link from 'next/link'
// Styles
import styles from './Button.module.scss'

export default function Button ({ children, href, onClick, className, icon }) {
  
  if (!!href) return (
    <ButtonLink
      href={href}
      onClick={onClick}
      icon={icon}
      className={className}
    >
      {children}
    </ButtonLink>
  )
  
  else return (
    <JustButton
      onClick={onClick}
      icon={icon}
      className={className}
    >
      {children}
    </JustButton>
  )
  
}

function ButtonLink ({ href, onClick, children, icon, className }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${styles.link} ${className}`}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </Link>
  )
}

function JustButton ({ onClick, children, icon, className }) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${className}`}
    >
      {!!icon && icon}
      {!!children && <span>{children}</span>}
    </button>
  )
}