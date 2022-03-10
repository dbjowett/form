import Reset from '../components/Reset';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      <Reset />
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
