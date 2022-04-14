import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();
  let path = router.pathname.slice(1);

  return (
    <div className='navbar container'>
      <div className='logo'>
        <Link href='/' passHref>
          <img src='/img/logo.png' alt='Logo Personal' className='logo' />
        </Link>
      </div>
      <div className='menu'>
        <ul>
          <li>
            <Link href='/blog'>
              <a className={path === 'blog' ? 'active' : ''}>Blog</a>
            </Link>
          </li>
          <li>
            <Link href='/portfolio'>
              <a className={path === 'portfolio' ? 'active' : ''}>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className={path === 'about' ? 'active' : ''}>About</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className={path === 'contact' ? 'active' : ''}>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
