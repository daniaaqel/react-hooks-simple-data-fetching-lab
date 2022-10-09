// create your App component here
import { useEffect, useState } from "react";
const App = () => {
  const [isLoaded, setisLoaded] = useState(false);
  const [img, setImg] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setisLoaded(true);
        setImg(data.message);
      });
  }, []);

  return (
    <div>
      {isLoaded ? <img src={img} alt="A Random Dog"></img> : <p>Loading...</p>}
    </div>
  );
};

export default App;