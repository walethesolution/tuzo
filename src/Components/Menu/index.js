import "./index.scss";

function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#home">Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#tuzo">Tuzo</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#bookings">Bookings</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">Contact Us</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#services">Our Services</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
