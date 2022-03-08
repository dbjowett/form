import Link from 'next/link';
import Image from 'next/image';

import styles from './form.module.css';
import { useState, useEffect } from 'react';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import svg from '../../public/kidsloop_min_logo.svg';

export default function Form() {
  const [emailPhone, setEmailPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // CHANGE THEME
  useEffect(() => {
    let theme;
    isDarkMode ? (theme = 'dark') : (theme = 'light');
    document.body.dataset.theme = theme;
  }, [isDarkMode]);

  // SUBMIT
  async function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    const config = {
      method: 'PATCH',
      headers: {
        body: {
          email: emailPhone,
          password: password
        }
      }
    };
    const res = await fetch('https://my-json-server.typicode.com/kidsloop-test/accounts/sign-in', config);
    const data = await res.json();
    setIsLoading(false);
    console.log(data);
  }

  // USE FOR VALIDATION
  useEffect(() => {
    // console.log(password, emailPhone);
  }, [password, emailPhone]);

  return (
    <div>
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.imgContainer}>
            <Image width={75} height={65} src={svg} alt='Logo' />
          </div>
          <h1 className={styles.title}>Sign in</h1>
          <input
            required
            type='email'
            placeholder='Email or Phone'
            className={styles.email}
            value={emailPhone}
            onChange={(e) => setEmailPhone(e.target.value)}
            autoComplete='email'
          />
          <input
            required
            type='password'
            placeholder='Password'
            className={styles.password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete='current-password'
          />
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
        <button type='button' onClick={() => setIsDarkMode((prev) => !prev)}>
          {isDarkMode ? <MdDarkMode fontSize={16} /> : <MdLightMode fontSize={16} />}
        </button>
        {/* <label htmlFor='language'></label>
        <select name='language' id='language'>
          <option value='en'>English</option>
          <option value='kr'>한국어</option>
        </select> */}
      </div>
    </div>
  );
}
