import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className='w-full px-7'>
      <ul className='flex justify-between items-center'>
        <div>Web Store</div>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Produk</Link>
        </li>
        <button>info</button>
      </ul>
    </nav>
  );
};

export default Navbar;
