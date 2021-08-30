
import styles from '../styles/Home.module.css';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout pageTitle="Home Page">
      <h1 className={styles['title-homepage']}>Welcome Rafi</h1>
    </Layout>
  );
}

export default Home
