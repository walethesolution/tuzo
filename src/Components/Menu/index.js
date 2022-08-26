import "./index.scss";

function Menu({ menuOpen, setMenuOpen }) {
  const handleClick = () => setMenuOpen(false);

  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={handleClick}>
          <a href="#home">Home</a>
        </li>
        <li onClick={handleClick}>
          <a href="#tuzo">Tuzo</a>
        </li>
        <li onClick={handleClick}>
          <a href="#bookings">Bookings</a>
        </li>
        <li onClick={handleClick}>
          <a href="#contact">Contact Us</a>
        </li>
        <li onClick={handleClick}>
          <a href="#services">Our Services</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
