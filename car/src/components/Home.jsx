import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const images = [
    'https://vandimandi.com/assets/img/home/hero-slider/02A.jpg',
    'https://vandimandi.com/assets/img/home/hero-slider/01A.jpg',
    'https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Thar/10745/1697697308167/front-left-side-47.jpg?impolicy=resize&imwidth=420',
    'https://d2m3nfprmhqjvd.cloudfront.net/blog/20230421185728/Skoda-Slavia-1160x653.webp',
    'https://vandimandi.com/assets/img/home/hero-slider/03A.jpg',
    'https://www.supercars.net/blog/wp-content/uploads/2017/10/lamborghini_egoista_concept_car-1920x1200.jpg',
    'https://imteg.weebly.com/uploads/5/4/9/8/54982803/2421183_orig.jpg',
    'https://c4.wallpaperflare.com/wallpaper/939/614/401/car-hd-widescreen-for-laptop-wallpaper-preview.jpg',
    'https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?cs=srgb&dl=pexels-mikebirdy-1035108.jpg&fm=jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    setCurrentIndex(isFirstSlide ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    setCurrentIndex(isLastSlide ? 0 : currentIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div>
      {/* Carousel Section */}
      <div className='carousel'>
        <div className='carousel-inner'>
          <button className='left-arrow' onClick={goToPrevious}>
            &#10094;
          </button>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className='carousel-image' />
          <button className='right-arrow' onClick={goToNext}>
            &#10095;
          </button>
        </div>
      </div>

      {/* Main Content */}
      <main className="content">
        <h1 className='brand'> Brand</h1>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/audi.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/bmw.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/honda.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/6598_Kia%20logo.jpg' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/mahindra.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/jeep.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/skoda.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/force.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/toyota.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/mitsubishi.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/renault.png' />
          </button>
        </Link>
        <Link to="">
          <button className='Applian'>
            <img src='https://vandimandi.com/uploads/brands/mini.png' />
          </button>
        </Link>

                  <div className="top-images-container">
            <img src="https://vandimandi.com/assets/img/shop/catalog/banner.jpg" alt="Top Image 1" className="top-image" />
            <img src="https://images.pexels.com/photos/241316/pexels-photo-241316.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Top Image 2" className="top-image" />
            <img src="https://images.pexels.com/photos/1035108/pexels-photo-1035108.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Top Image 3" className="top-image" />
          </div>
        
      </main>

      {/* Footer Section */}
      <footer id="footer" className="footer">
        <div className="footer-content">
          <p>&copy; 2025 CarZone. All rights reserved.</p>
          <ul className="footer-links">
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
          <div className="footer-contact">
            <p>Email: <a href="mailto:priyajambu10@gmail.com">priyajambu10@gmail.com</a></p>
            <p>Phone: <a href="tel:+16374605519">+1 637-460-5519</a></p>
          </div>
          <div className="footer-social">
            <a href="/facebook" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://bst.icons8.com/wp-content/uploads/2024/06/facebook_secondary_logo_on_blue_background.webp" alt="Facebook" />
            </a>
            <a href="/instra" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://img.freepik.com/free-vector/instagram-logo_1199-122.jpg" alt="Instagram" />
            </a>
            <a href="/youtube" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="https://static-00.iconduck.com/assets.00/youtube-icon-1024x1024-t3zo1lo4.png" alt="YouTube" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
