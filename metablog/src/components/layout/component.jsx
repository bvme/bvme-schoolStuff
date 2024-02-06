import { useContext } from "react";
import { FirstContext } from "../UI/Context";

export const Component = () => {
  const value = useContext(FirstContext);
  console.log(value);
  return (
    <div>
      <p>Hello</p>
    </div>
  );
};
