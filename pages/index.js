import Form from '../components/Form';
import FormCopy from '../components/Form/index_copy';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Form /> */}
      <FormCopy type='signin' />
    </div>
  );
}

// Setup for language translation
export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
