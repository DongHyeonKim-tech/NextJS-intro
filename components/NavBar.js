import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();
  console.log('router: ', router);
  return (
    <nav>
      <Link href="/">
        {/* style, className 등은 a 태그에 적용해야 */}
        <a style={{color: router.pathname === '/' ? 'red' : 'white'}}>Home</a>
      </Link>
      {/* Link tag에 style, className 등 선언해도 적용 X */}
      <Link style={{color: 'blue'}} href="/about">
        About Us
      </Link>
    </nav>
  )
}

export default NavBar;