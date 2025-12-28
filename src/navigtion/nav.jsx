import "./nav.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a className="logo" href="/">
          ModernTravel
        </a>
      </div>

      <ul className="navs">
        <li>
          <select name="home">
            <option value="">Home</option>
            <option value="hero">Hero</option>
            <option value="features">Features</option>
            <option value="reviews">Reviews</option>
          </select>
        </li>

        <li>
          <select name="tours">
            <option value="">Tours</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            <option value="america">America</option>
          </select>
        </li>

        <li>
          <select name="destinations">
            <option value="">Destinations</option>
            <option value="paris">Paris</option>
            <option value="rome">Rome</option>
            <option value="tokyo">Tokyo</option>
          </select>
        </li>

        <li>
          <select name="services">
            <option value="">Services</option>
            <option value="booking">Booking</option>
            <option value="guides">Guides</option>
            <option value="insurance">Insurance</option>
          </select>
        </li>

        <li>
          <select name="about">
            <option value="">About</option>
            <option value="company">Company</option>
            <option value="team">Team</option>
            <option value="careers">Careers</option>
          </select>
        </li>

        <li>
          <select name="contact">
            <option value="">Contact</option>
            <option value="email">Email</option>
            <option value="phone">Phone</option>
            <option value="support">Support</option>
          </select>
        </li>

        <li>
          <select name="language" defaultValue="en">
            <option value="en">EN</option>
            <option value="ge">GE</option>
            <option value="ru">RU</option>
          </select>
        </li>

        <li>
          <select name="account">
            <option value="">Account</option>
            <option value="login">Login</option>
            <option value="register">Register</option>
            <option value="profile">Profile</option>
          </select>
        </li>
      </ul>
      <div className="btns">
        <button className="btn login">Login</button>
        <button className="btn signup">Sign Up</button>
      </div>
    </nav>
  );
}
