import Link from 'next/link';
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <div className="logo">
          <Image src="/LCL Logo.png" alt="site logo" width={250} height={100} />
          <span className="logo-text">London Comedy Lunch</span>
        </div>
      </Link>
      <Link href="/"><a>Home</a></Link>
    </nav>
);
}
 
export default Navbar;