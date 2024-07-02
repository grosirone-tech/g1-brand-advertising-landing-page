import styles from './page.module.css';
import './footer/footer.css';
import Footer from './footer/Footer.tsx';
export default function Home() {
  return (
    <main className={styles.main}>
      <Footer />
    </main>
  );
}
