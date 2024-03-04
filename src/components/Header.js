import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header() {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary text-white">
      <a className="font-bold" href="#">
        Sri
      </a>
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Mobile view menu */}

      {toggleMenu && (
        <nav className="block md:hidden ">
          <ul className="flex flex-col mobile-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      )}

      <button
        className="block md:hidden"
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  )
}
