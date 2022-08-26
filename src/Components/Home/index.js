import "./index.scss";
import hookah from "../../Images/hookahVector.png";

function Home() {
  return (
    <div className="home" id="home">
      <div className="imgContainer">
        <img src={hookah} alt="Hookah vector"></img>
      </div>
      {/* <div className="text-container">
        <h3> One pull</h3>
        <h2> LOUD CLOUD</h2>
      </div> */}
    </div>
  );
}

export default Home;
