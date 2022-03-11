import Link from 'next/link';
import Logo from '../components/Logo';

export default function ComingSoon() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Logo />
      <h1 style={{ fontSize: '2rem' }}>Sorry!</h1>
      <p>This page is coming soon</p>
      <p>
        <Link href='/' locale='en' passHref>
          <a href='' style={{ color: 'blue', borderBottom: '1px solid blue' }}>
            Sign in
          </a>
        </Link>
      </p>
      <br />
      <h1 style={{ fontSize: '2rem' }}>죄송합니다!</h1>
      <p>이 페이지는 준비 중 입니다</p>
      <p>
        <Link href='/kr' locale='kr' passHref>
          <a href='' style={{ color: 'blue', borderBottom: '1px solid blue' }}>
            로그인
          </a>
        </Link>
      </p>
    </div>
  );
}
