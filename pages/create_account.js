// import SignUp from '../components/SignUp';
import FormCopy from '../components/Form/index_copy';
import styles from '../styles/Home.module.css';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function CreateAccount() {
  return (
    <div className={styles.container}>
      {/* <SignUp /> */}
      <FormCopy type='create' />
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
