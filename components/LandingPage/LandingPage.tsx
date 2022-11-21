import { useRouter } from 'next/router';
import styles from '../../styles/LandingPage.module.css';
import { Navbar } from '../Navbar/Navbar';
import Products from '../Products/Products';

const LandingPage = ({ addToCart }: any) => {
  const router = useRouter();
  let greeting =
    router.locale === 'en-US'
      ? 'Hello World'
      : router.locale === 'es'
      ? 'Hallo weit'
      : router.locale === 'fr'
      ? 'Bonjour le mande'
      : '';

  const handleOnChange = () => {};

  const handleOnSubmit = () => {};

  return (
    <>
      <div className={styles.body}>
        <h1 className='text-white text-5xl'> {greeting} </h1>
      </div>
      <Products addToCart={addToCart} />
    </>
  );
};

export default LandingPage;
