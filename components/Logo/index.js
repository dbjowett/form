import Image from 'next/image';
import svg from '../../public/kidsloop_min_logo.svg';

export default function Logo() {
  return (
    <div>
      <Image width={75} height={65} src={svg} alt='Logo' />
    </div>
  );
}
