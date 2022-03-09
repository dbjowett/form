import Link from 'next/link';
import Image from 'next/image';

import styles from './form.module.css';
import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import svg from '../../public/kidsloop_min_logo.svg';

import useForm from '../../hooks/useForm';
import validateForm from '../../utils/validateForm';

import { useTranslation } from 'next-i18next';

export default function Form() {
  const {
    t,
    i18n: { changeLanguage }
  } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmit, inputs, errors } = useForm(setIsLoading, validateForm);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // CHANGE LANGUAGE
  const handleSelectChange = (e) => changeLanguage(e.target.value);

  // CHANGE THEME
  useEffect(() => {
    let theme;
    isDarkMode ? (theme = 'dark') : (theme = 'light');
    document.body.dataset.theme = theme;
  }, [isDarkMode]);

  return (
    <div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.imgContainer}>
            <Image width={75} height={65} src={svg} alt='Logo' />
          </div>
          <h1 className={styles.title}>{t('signin')}</h1>
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
          <input
            type='password'
            placeholder={t('password')}
            className={styles.password}
            name='password'
            value={inputs.password}
            onChange={handleChange}
            autoComplete='current-password'
          />
          {errors.password && <div className={styles.errors}>{errors.password}</div>}
          <div className={styles.btnContainer}>
            <Link href='/forgot_password'>
              <a>{t('forgot')}</a>
            </Link>
            <button type='submit' className={styles.signInBtn}>
              {t('signin')}
            </button>
          </div>
          <div>
            <Link href='/create_account'>
              <a>{t('create')}</a>
            </Link>
          </div>
        </form>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.darkLanguageContainer}>
          <button type='button' onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? <MdDarkMode fontSize={16} /> : <MdLightMode fontSize={16} />}
          </button>
          <div>
            <select name='language' id='language' onChange={handleSelectChange}>
              <option value='en'>English</option>
              <option value='kr'>한국어</option>
            </select>
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
