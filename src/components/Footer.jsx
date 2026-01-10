import style from './Footer.module.css';

const dcComicsLinks = [
  { text: 'Characters', url: '#' },
  { text: 'Comics', url: '#' },
  { text: 'Movies', url: '#' },
  { text: 'TV', url: '#' },
  { text: 'Games', url: '#' },
  { text: 'Videos', url: '#' },
  { text: 'News', url: '#' },
];

const shopLinks = [
  { text: 'Shop DC', url: '#' },
  { text: 'Shop DC Collectibles', url: '#' },
];

const dcLinks = [
  { text: 'Terms Of Use', url: '#' },
  { text: 'Privacy policy (New)', url: '#' },
  { text: 'Ad Choices', url: '#' },
  { text: 'Advertising', url: '#' },
  { text: 'Jobs', url: '#' },
  { text: 'Subscriptions', url: '#' },
  { text: 'Talent Workshops', url: '#' },
  { text: 'CPSC Certificates', url: '#' },
  { text: 'Ratings', url: '#' },
  { text: 'Shop Help', url: '#' },
  { text: 'Contact Us', url: '#' },
];

const sitesLinks = [
  { text: 'DC', url: '#' },
  { text: 'MAD Magazine', url: '#' },
  { text: 'DC Kids', url: '#' },
  { text: 'DC Universe', url: '#' },
  { text: 'DC Power Visa', url: '#' },
];

const socialLinks = [
  { name: 'Facebook', icon: '/img/footer-facebook.png', url: '#' },
  { name: 'Twitter', icon: '/img/footer-twitter.png', url: '#' },
  { name: 'YouTube', icon: '/img/footer-youtube.png', url: '#' },
  { name: 'Pinterest', icon: '/img/footer-pinterest.png', url: '#' },
  { name: 'Periscope', icon: '/img/footer-periscope.png', url: '#' },
];

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerTop}>
        <div className={style.container}>
          <div className={style.linksContainer}>
            <div>
              <h3>DC COMICS</h3>
              <ul>
                {dcComicsLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
              <h3 className={style.shopTitle}>SHOP</h3>
              <ul>
                {shopLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>DC</h3>
              <ul>
                {dcLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>SITES</h3>
              <ul>
                {sitesLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url}>{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.footerBottom}>
        <div className={style.container}>
          <div className={style.signUp}>
            <button className={style.signUpButton}>SIGN-UP NOW!</button>
          </div>
          <div className={style.social}>
            <h3>FOLLOW US</h3>
            <ul>
              {socialLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>
                    <img src={link.icon} alt={link.name} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
