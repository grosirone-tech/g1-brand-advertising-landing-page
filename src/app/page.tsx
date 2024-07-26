import styles from './page.module.css';
import {Header} from '@/component/header/Header';
import Home from '@/scenes/home/Home';
import OurServices from '@/scenes/ourServices/OurServices';
import PlanPricing from '@/scenes/planPricing/PlanPricing';
import Enhance from '@/scenes/enhanceVisibility/EnhanceVisibility';
import OurTechnology from '@/scenes/ourTechnology/OurTechnology';
import ContactUs from '@/scenes/contactUs/ContactUs';
import Footer from '@/component/footer/Footer';

export default function Main() {
  return (
    <main className={styles.main}>
      <Header />
      <Home />
      <OurServices />
      <PlanPricing />
      <Enhance />
      <OurTechnology />
      <ContactUs/>
      <div className={styles.footer}>
        <Footer />
      </div>
    </main>
  );
}
