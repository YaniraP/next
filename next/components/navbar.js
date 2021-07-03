import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {

  return (
    <div className={styles.topnav}>
      <Link href='/'>
        <a>Guest List</a>
      </Link>
    </div>
  );
}
