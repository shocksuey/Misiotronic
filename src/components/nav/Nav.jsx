import styles from './Nav.module.css'
import Link from 'next/link'

const routes = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Contact',
    route: '/contact'
  },
  {
    label: 'Store',
    route: '/store'
  },
  {
    label: 'About',
    route: '/about'
  },
  {
    label: 'Links',
    route: '/links'
  },
  {
    label: 'Owner',
    route: '/owner'
  }
]

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
      { 
        routes.map(({label, route}) => (
          <li className={styles.item}>
            <Link href={route} className={styles.link}>
              {label}
            </Link>
          </li>
        ))
      }
      </ul>
    </nav>
  )

}