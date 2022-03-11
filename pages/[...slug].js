import Image from 'next/image';
import Link from 'next/link';
import svg from '../public/kidsloop_min_logo.svg';

export default function ComingSoon() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div>
        <Image width={75} height={65} src={svg} alt='Logo' />
      </div>
      <h1 style={{ fontSize: '2rem' }}>Sorry!</h1>
      <p>This page is coming soon</p>
      <p>
        Please{' '}
        <Link href='/' passHref>
          <a href='' style={{ color: 'blue', borderBottom: '1px solid blue' }}>
            sign in
          </a>
        </Link>
      </p>
    </div>
  );
}
