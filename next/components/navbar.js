import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className={styles.topnav}>
      <Link href='/'>
        <a>Guest List</a>
      </Link>
      <div className={styles.searchContainer}>
        <form action='/action_page.php'>
          <input type='text' placeholder='Search a guest' name='search'></input>
          <button type='submit'>
            <i className='fa fa-search'></i>
          </button>
        </form>
      </div>
    </div>
  );
}
