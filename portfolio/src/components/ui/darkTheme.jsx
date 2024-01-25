import { useEffect } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("hello", count);
    // document.title = `Count = ${count}`;
  }, [count]);
  return <div>
    <button onClick={()=> setCount(count + 1)}>nemeh</button>
  </div>;
};
export default MyButton;
