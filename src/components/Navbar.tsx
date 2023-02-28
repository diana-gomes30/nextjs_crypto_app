import React from 'react';
import Link from 'next/link';

const Navbar = () => (
  <div>
    <div>
      <div className="flex-1">
        <Link href="/" className="text-xl bg-slate-50">
          Crypto App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="px-1">
          <li>
            <Link href="/top10">Top 10</Link>
          </li>
          <li>
            <Link href="/watchlist">Watchlist</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navbar;
