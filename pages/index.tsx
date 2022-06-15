import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      Damoa
      <Link href="/main-static">
        <a>lazy</a>
      </Link>
      <Link href="/main-ssr">
        <a>dynamic</a>
      </Link>
      <a href="/main-ssr">dynamic2</a>
      <style jsx>{`
        a {
          display: block;
        }
      `}</style>
    </div>
  );
};

export default Home;
