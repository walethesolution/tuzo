import "./index.scss";
import colorHookah from "../../Images/hookahGold.png";

function Bookings() {
  return (
    <div className="bookings" id="bookings">
      {/* <img src={colorHookah} alt="colorful hookah"></img> */}
      <div className="contact-form">
        <form>
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
      </div>
    </div>
  );
}

export default Bookings;
