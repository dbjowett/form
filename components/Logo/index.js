import Image from 'next/image';
import React from 'react';
import svg from '../../public/kidsloop_min_logo.svg';

// export default function Logo() {
//   return (
//     <div>
//       <Image width={75} height={65} src={svg} alt='Logo' />
//     </div>
//   );
// }

const Logo = () => <Image width={75} height={65} src={svg} alt='Logo' />;
export default Logo;
