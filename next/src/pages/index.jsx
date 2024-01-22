import { ImageContainer } from "@/components/imagecontainer";
import { NewsBox } from "../components/newsbox";

export default function home() {
  const styles = {
    main: { display: "flex", flexDirection: "column", alignItems: "center" },
    imagecontainer: { display: "flex", gap: 20 },
    newsbox: { display: "flex", width: 800 },
  };
  return (
    <div style={styles.main}>
      <div style={styles.imagecontainer}>
        <div>
          <ImageContainer />
        </div>
        <div>
          <ImageContainer />
        </div>
        <div>
          <ImageContainer />
        </div>
      </div>
      <div style={styles.newsbox}>
        <div>
          <NewsBox />
        </div>
        <div>
          <NewsBox />
        </div>
      </div>
    </div>
  );
}

import { userData } from "@/components/userData";
import { Cards } from "../components/cards";
export default function Home() {
  const styles = {
    maincontainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      margin: "40px 500px"
    }
  }
 return (
  <div className="main-container" style={styles.maincontainer}>
    < Cards />
  </div>
 )
};

import { useState } from "react";

export default function MyComponent() {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      {toggle ? (
        <button className="bg-red-500 w-50 h-50" onClick={handleClick}>
          off
        </button>
      ) : (
        <button className="bg-green-500 w-50 h-50" onClick={handleClick}>
          on
        </button>
      )}
    </div>
  );
}
