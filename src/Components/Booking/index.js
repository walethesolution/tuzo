import { Container } from "react-bootstrap";
import hookahGold from "../../Images/hookahGold.png";
import "./index.scss";

function Booking() {
  return (
    <div className="booking">
      <Container>
        <img src={hookahGold} width="100%" height="100%" alt="gold hookah" />
        <form className="form" onSubmit={() => alert("submitted")}>
          <ul>
            <li className="form-half">
              <input type="text" name="name" placeholder="Name" required />
            </li>
            <li className="form-half">
              <input type="email" name="email" placeholder="Email" required />
            </li>
            <li>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
            </li>
            <li>
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
            </li>
            <li>
              <input type="submit" className="send-button" value="SEND" />
            </li>
          </ul>
        </form>
      </Container>
    </div>
  );
}

export default Booking;
