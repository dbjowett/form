// import SignUp from '../components/SignUp';
import Form from '../components/Form';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function CreateAccount() {
  return (
    <div className={styles.container}>
      <Form type='create' />
    </div>
  );
}

export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  };
}
