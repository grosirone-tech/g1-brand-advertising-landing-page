import Image from 'next/image';
import styles from './page.module.css';
import SocialButton from './core-ui/button/SocialButton.tsx';

export default function Home() {
  return (
    <main className={styles.main}>
      <SocialButton />
    </main>
  );
}
