import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Header />
      <h1 className={styles['title-homepage']}>Welcome Rafi</h1>
      <Footer />
    </>
  );
}

export default Home
