import { userData } from "./userData";
export const Cards = () => {
    const styles = { 
        container: {
          border: "1px solid black",
          width: "300px",
          borderRadius: "20px",
          backgroundColor: "white"
        },  
        details: {
          paddingLeft:"10px"
        }
    };
    return ( userData.map((el, i) => (
        <div className="container" style={styles.container}>
      <div className="img-container">
        <img src={el.avatar} alt="" />
      </div>
      <div className="details" style={styles.details}>
        <div className="first">firstname: {el.first_name}</div>
        <div className="last">lastname: {el.last_name}</div>
        <div className="employment-title">
          employment:
          <div>title:{el.employment.title}</div>
          <div>key-skill:{el.employment.key_skill}</div>
        </div>
        <div className="email">{el.email}</div>
      </div>
    </div>
  ))
  )
};