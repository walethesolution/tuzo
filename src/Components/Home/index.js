import "./index.scss";
import hookah from "../../Images/Hookah_vector.jpeg";

function Home() {
  return (
    <div className="home" id="home">
      {/* <img src={hookah} alt="Hookah vector"></img> */}
      <div className="text-container">
        <h3> One pull</h3>
        <h2 className="cl"> LOUD CLOUD</h2>
      </div>
    </div>
  );
}

export default Home;
