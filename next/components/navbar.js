import styles from '../styles/Navbar.module.css';
import logo from '../public/the_Knot_Logo_full.png'
import Link from 'next/link';
import Image from 'next/image'

export default function Navbar() {

  return (
    <div className={styles.topnav}>
      <Link href='/'>
        <a><Image 
        src={logo} 
        alt='Logo'
        width={90}
        height={30}/></a>
      </Link>
    </div>
  );
}
