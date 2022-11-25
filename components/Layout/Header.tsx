import React from 'react';
import Link from 'next/link'

type menuItemType = {
  name: string;
  link: string;
}

function Header() {
  const menuItems: menuItemType[] = [
    { name: 'Blog', link: '/blog' },
    { name: 'Vlog', link: '/vlog' },
    { name: 'Category', link: '/category' },
    { name: 'About', link: '/about' },
  ];

  return (
    <div>
      <div className='flex row justify-between'>
        <div className='grow'><Link href='/'>Logo</Link></div>
        <ul className='grow flex row justify-evenly'>
          {menuItems.map((item) => (
            <li className='' key={item.name}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header;
