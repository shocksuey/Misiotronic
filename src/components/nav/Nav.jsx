import styles from './Nav.module.css'
import Link from 'next/link'
import { useState } from 'react'

const routes = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Store',
    route: '/store'
  },
  {
    label: 'Contact',
    route: '/contact'
  },
  {
    label: 'About us',
    route: '/about'
  }
]

const Listing = () =>       
  (<ul className={styles.list}>
  { 
    routes.map(({label, route}) => (
      <li className={styles.item} key={ label + route }>
        <Link href={route} className={styles.link}>
          {label}
        </Link>
      </li>
    ))
  }
  </ul>)

  const Icon = () => (
    <div className={styles.iconCont}>
      <div className={styles.tile}></div>
      <div className={styles.tile}></div>
      <div className={styles.tile}></div>
    </div>
  )

const ListingMobile = () =>
  (<ul className={styles.listMobile}>
    <span className={styles.modalExit}>❌</span>
    { 
      routes.map(({label, route}) => (
        <li className={styles } key={ label + route }>
          <Link href={route} className={styles.linkMobile}>
            {label}
          </Link>
        </li>
      ))
    }
    </ul>)

function handleModal () {
  setModal(!modal)
}

export default function Nav() {
  
  const [modal, setModal] = useState(false)
  function handleModal () {
    setModal(!modal)
  }
  
  return (
    <nav className={styles.nav}>
      <div className={styles.mobile} onClick={handleModal}>
        {
          !modal?
            (<Icon />)
          : null
        }
      </div>
      {
        modal ?
        <div className={styles.modal} onClick={handleModal}>
          <ListingMobile />
        </div>
        : null
      }
      <div className={styles.notMobile}>
        <Listing />
      </div>
    </nav>
  )

}