import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { Spinner } from '@chakra-ui/react';
import styles from './form.module.css';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

import useForm from '../../hooks/useForm';
import useValidate from '../../hooks/useValidate';

import { useTranslation } from 'next-i18next';
import Logo from '../Logo';

export default function FormCopy({ type, title }) {
  const router = useRouter();
  const { t } = useTranslation();

  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmitSignIn, handleSubmitCreate, handleSubmitForgot, inputs, errors } = useForm(setIsLoading, useValidate);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // CHANGE THEME
  useEffect(() => {
    let theme;
    isDarkMode ? (theme = 'dark') : (theme = 'light');
    document.body.dataset.theme = theme;
  }, [isDarkMode]);

  function onFormSubmit(e) {
    type === 'signin' ? handleSubmitSignIn(e) : handleSubmitCreate(e);
  }

  return (
    <div>
      {/* FORM CONTAINER START */}
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={(e) => onFormSubmit(e)}>
          <Link href='/' passHref>
            <Logo />
          </Link>
          <h1 className={styles.title}>{t(type)}</h1>
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
          {type === 'create' && (
            <input
              type='password'
              placeholder={t('password2')}
              className={styles.password}
              name='password2'
              value={inputs.password2}
              onChange={handleChange}
              autoComplete='current-password'
            />
          )}
          {errors.password2 && <div className={styles.errors}>{errors.password2}</div>}

          {/* SUBMIT BUTTON */}
          <div className={styles.btnContainer}>
            <Link href='/forgot_password'>
              <a>{t('forgot')}</a>
            </Link>
            <button type='submit' className={styles.signInBtn} disabled={isLoading}>
              {!isLoading ? (
                t(type)
              ) : (
                <div style={{ marginTop: '3px' }}>
                  <Spinner size='sm' />
                </div>
              )}
            </button>
          </div>
          {/* LINKS */}
          <div>
            {type === 'create' ? (
              <Link href='/'>
                <a>{t('signin')}</a>
              </Link>
            ) : (
              <Link href='/create_account'>
                <a>{t('create')}</a>
              </Link>
            )}
          </div>
        </form>
      </div>
      <div className={styles.bottomContainer}>
        <div className={styles.darkLanguageContainer}>
          <button type='button' onClick={() => setIsDarkMode((prev) => !prev)}>
            {isDarkMode ? <MdDarkMode fontSize={16} /> : <MdLightMode fontSize={16} />}
          </button>
          {/* LANGUAGE SWITCH CONTAINER */}
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
        {/* HELP PRIVACY TERMS CONTAINER */}
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
