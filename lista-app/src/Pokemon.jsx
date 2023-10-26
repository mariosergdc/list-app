import { useEffect } from "react";

const Pokemon = () => {
  useEffect(() => {
    console.log("use effect");
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        data.results.map((el) => {
          fetch(el.url)
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              console.log("name", data.name);
            });
        });
      });
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default Pokemon;
