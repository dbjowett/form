import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import FormCopy from '../components/Form/index_copy';

export default function ForgotPassword() {
  return (
    <div className={styles.container}>
      {/* <FormCopy type='forgot' /> */}
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
