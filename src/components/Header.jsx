import { useState } from 'react';
import style from './Header.module.css';

const navLinks = [
  { text: 'Characters', url: '#' },
  { text: 'Comics', url: '#' },
  { text: 'Movies', url: '#' },
  { text: 'TV', url: '#' },
  { text: 'Games', url: '#' },
  { text: 'Collectibles', url: '#' },
  { text: 'Videos', url: '#' },
  { text: 'Fans', url: '#' },
  { text: 'News', url: '#' },
  { text: 'Shop', url: '#' },
];

function Header() {
  const [activeLink, setActiveLink] = useState('Comics');

  return (
    <header className={style.header}>
      <div className={style.container}>
        <img className={style.logo} src="/img/dc-logo.png" alt="DC Logo" />

        <nav className={style.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.text}>
                <a
                  href={link.url}
                  className={activeLink === link.text ? style.active : ''}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent page reload for '#' links
                    setActiveLink(link.text);
                  }}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
