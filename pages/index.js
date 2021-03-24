import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SearchLocationInput from '../src/components/SearchLocationInput';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Google Place Auto Suggestion</title>
      </Head>

      <main className={styles.main}>
        <SearchLocationInput onChange={() => null} />
      </main>
    </div>
  )
}
