import "./App.css";
import { useState } from "react";
import axios from "axios";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const getData = async () => {
    try {
      const res = await axios.get("http://172.0.0.1:3000");
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>Open data from back</button>
        {isOpen && <button onClick={getData}>Send data</button>}
      </div>
    </>
  );
}

export default App;
