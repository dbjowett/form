import Link from 'next/link';
import Image from 'next/image';

import styles from './signUp.module.css';
import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import svg from '../../public/kidsloop_min_logo.svg';

import useForm from '../../hooks/useForm';
import validateForm from '../../utils/validateForm';

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, handleSubmit, inputs, errors } = useForm(setIsLoading, validateForm);
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          <h1 className={styles.title}>Sign up</h1>
          <input
            type='text'
            placeholder='Email or Phone'
            className={styles.email}
            name='emailPhone'
            value={inputs.emailPhone}
            onChange={handleChange}
            autoComplete='email'
          />
          {errors.emailPhone && <div className={styles.errors}>{errors.emailPhone}</div>}
          <input
            type='password'
            placeholder='Password'
            className={styles.password}
            name='password'
            value={inputs.password}
            onChange={handleChange}
            autoComplete='current-password'
          />
          {errors.password && <div className={styles.errors}>{errors.password}</div>}
          <div className={styles.btnContainer}>
            <Link href='/forgot_password'>
              <a>Forgot your password?</a>
            </Link>
            <button type='submit' className={styles.signInBtn}>
              Sign In
            </button>
          </div>
          <div>
            <Link href='/create_account'>
              <a>Create an account</a>
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
            <select name='language' id='language'>
              <option value='en'>English</option>
              <option value='kr'>한국어</option>
            </select>
          </div>
        </div>
        <div className={styles.linksContainer}>
          <Link href='/help'>
            <a>Help</a>
          </Link>
          <Link href='/privacy'>
            <a>Privacy</a>
          </Link>
          <Link href='/terms'>
            <a>Terms</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
