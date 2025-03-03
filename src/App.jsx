import "./App.css";

function App() {
  let count = 0;
  const decrease = () => {
    count -= 1;
    document.getElementById("count-display").innerText = count;
  };
  const increase = () => {
    count += 1;
    document.getElementById("count-display").innerText = count;
  };
  const author = (author = "HCI Class") => {
    return author;
  };

  const reset = () => {
    count = 0;
    document.getElementById("count-display").innerText = count;
  };

  return (
    <>
      <div>
        <h1>Counter App by {author()}</h1>
      </div>
      <div className="card">
        <button className="button" onClick={decrease}>
          -
        </button>
        <h2 id="count-display">{count}</h2>
        <button className="button" onClick={increase}>
          +
        </button>
      </div>
      <div>
        <button onClick={reset}>RESET</button>
      </div>
    </>
  );
}

export default App;
