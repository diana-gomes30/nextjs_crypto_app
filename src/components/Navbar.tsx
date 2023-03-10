import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <nav className="flex items-center justify-between p-5 bg-first-dark-blue text-light">
    <div className="text-4xl">
      <Link href="/">Crypto App</Link>
    </div>
    <ul>
      <div className="flex gap-[1em] text-[18px] text-center">
        <li className="py-1 px-6 hover:bg-third-dark-blue rounded-md transition ease-in delay-100">
          <Link href="/top10">Top 10</Link>
        </li>
        <li className="py-1 px-6 hover:bg-third-dark-blue rounded-md transition ease-in delay-100">
          <Link href="/watchlist">Watchlist</Link>
        </li>
      </div>
    </ul>
  </nav>
);

export default Navbar;
