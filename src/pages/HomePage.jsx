import { Link } from "react-router";
const HomePage = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>ESSENTIALS.</h1>
        <h4>YOUR FAVORITE FINDS, ALL IN ONE PLACE.</h4>
        <h4>CAREFULLY SELECTED. EFFORTLESSLY YOURS.</h4>
        <Link to="/shop" className="hero-button">
          SHOP NOW
        </Link>
      </div>
      <img className="hero-img" src="/public/imgs/hero-img2.webp" />
    </div>
  );
};
export default HomePage;
