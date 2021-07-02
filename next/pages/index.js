import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import useSWR from 'swr';
import Guest from '../components/guest';
import Navbar from '../components/navbar';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function HomePage() {
  const { data, error } = useSWR('/api/guests', fetcher);

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';

  return (
    <div >
      <Head>
        <title>Guest List</title>
        <meta name='description' content='Generated by create next app' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'></link>
          <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Navbar />

        <div >
          <h1 className={styles.title}>Guest List</h1>
          <div className={styles.container}>
            {data.map((guest) => (
              <Guest key={guest.id} guest={guest} />
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
