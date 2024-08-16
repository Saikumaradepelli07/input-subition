import { useState } from "react";
const Submute = () => {
  const [input, setinput] = useState();
  const [dispaly, setdisplay] = useState();
  function handleInputChange(event) {
    setinput(event.target.value);
  }
  function handleSumbmit(event) {
    event.preventDefault();
    setdisplay(input);
    setinput("");
  }
  return (
    <div>
      <form onSubmit={handleSumbmit}>
        <input type="text" value={input} onChange={handleInputChange} />
        <button type="submit">submute</button>
      </form>
      <h1>{input}</h1>
      <p>{dispaly}</p>
    </div>
  );
};

export default Submute;
