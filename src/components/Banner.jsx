import Style from './Banner.module.css';

const bannerItems = [
  {
    text: 'Digital Comics',
    image: '/img/buy-comics-digital-comics.png',
  },
  {
    text: 'DC Merchandise',
    image: '/img/buy-comics-merchandise.png',
  },
  {
    text: 'Subscription',
    image: '/img/buy-comics-subscriptions.png',
  },
  {
    text: 'Comic Shop Locator',
    image: '/img/buy-comics-shop-locator.png',
  },
  {
    text: 'DC Power Visa',
    image: '/img/buy-dc-power-visa.svg',
  },
];

function Banner() {
  return (
    <div className={Style.banner}>
      <div className={Style.container}>
        <ul className={Style.list}>
          {bannerItems.map((item, index) => (
            <li key={index} className={Style.listItem}>
              <a href="#">
                <img src={item.image} alt={item.text} />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Banner;
