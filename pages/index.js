import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LocationInput from '../src/components/LocationInput';

export default function Home() {
  const handleInputChange = (value) => {
    // Handle input change logic
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Google Auto Suggestion</title>
      </Head>

      <main className={styles.main}>
        <LocationInput onChange={handleInputChange} />
      </main>
    </div>
  );
}