import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

import styles from './reset.module.css';
import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import svg from '../../public/kidsloop_min_logo.svg';

import useForm from '../../hooks/useForm';
import validateForm from '../../utils/validateForm';

import { useTranslation } from 'next-i18next';

export default function Reset() {
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmitForgot, inputs, errors } = useForm(setIsLoading, validateForm);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // CHANGE THEME
  useEffect(() => {
    let theme;
    isDarkMode ? (theme = 'dark') : (theme = 'light');
    document.body.dataset.theme = theme;
  }, [isDarkMode]);

  return (
    <div>
      {/* FORM START */}
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmitForgot}>
          <Link href='/' passHref>
            <div className={styles.imgContainer}>
              <Image width={75} height={65} src={svg} alt='Logo' />
            </div>
          </Link>
          <h1 className={styles.title}>{t('forgot')}</h1>
          <input
            type='text'
            placeholder={t('email')}
            className={styles.email}
            name='emailPhone'
            value={inputs.emailPhone}
            onChange={handleChange}
            autoComplete='email'
          />
          {errors.emailPhone && <div className={styles.errors}>{errors.emailPhone}</div>}

          {/* SUBMIT BUTTON */}
          <div className={styles.btnContainer}>
            <Link href='/'>
              <a>{t('signin')}</a>
            </Link>
            <button type='submit' className={styles.signInBtn} disabled={isLoading}>
              {!isLoading ? (
                t('submit')
              ) : (
                <div style={{ marginTop: '3px' }}>
                  <Spinner size='sm' />
                </div>
              )}
            </button>
          </div>
          {/* LINKS */}
          <div>
            <Link href='/create_account'>
              <a>{t('create')}</a>
            </Link>
          </div>
        </form>
      </div>

      {/* LINKS BELOW FORM */}
      <div className={styles.bottomContainer}>
        <div className={styles.darkLanguageContainer}>
          <button type='button' onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? <MdDarkMode fontSize={16} /> : <MdLightMode fontSize={16} />}
          </button>
          <div className={styles.languageSwitchContainer}>
            {router.locale === 'kr' ? (
              <Link href={'/'} locale='en'>
                English
              </Link>
            ) : (
              <Link href={'/'} locale='kr'>
                한국어
              </Link>
            )}
          </div>
        </div>
        <div className={styles.linksContainer}>
          <Link href='/help'>
            <a>{t('help')}</a>
          </Link>
          <Link href='/privacy'>
            <a>{t('privacy')}</a>
          </Link>
          <Link href='/terms'>
            <a>{t('terms')}</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
