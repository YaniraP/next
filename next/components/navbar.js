import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import logo from '../public/the_Knot_Logo_full.png';

export default function Navbar() {
  return (
    <div className={styles.topnav}>
      <Link href='/'>
        <a>
          <Image src={logo} alt='Logo' width={95} height={30} />
        </a>
      </Link>
    </div>
  );
}
