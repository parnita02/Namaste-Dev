import { useState } from "react";
const User = (props) => {
  const [count, setcount] = useState(0);

  return (
    <div className="userAbout">
      <h1>count: {count}</h1>
      <button onClick={() => setcount(count + 1)}>click</button>

      <h2> Name: {props.name}</h2>
      <h2>Location: Rewa, Madhya Pradesh</h2>
      <h2>Contact: parnitadwivedi02@gmail.com</h2>
    </div>
  );
};
export default User;
