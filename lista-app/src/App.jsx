import { useState } from "react";
import "../src/App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [element, setElement] = useState("");

  const handleChange = (e) => {
    setElement(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setList((prevlist) => prevlist.concat(element));
    setElement("");
  };

  const handleDelete = (el) => {
    let newList = list.filter((element) => element != el);
    setList(newList);
  };
  return (
    <div className="flex-col">
      <div>App</div>
      <form className="flex-col">
        <input
          type="text"
          name="text"
          value={element}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Add</button>
      </form>
      <ul>
        {list.map((el, index) => (
          <li key={index} onClick={() => handleDelete(el)}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
