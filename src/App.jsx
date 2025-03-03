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

  return (
    <>
      <h1>Counter App by React</h1>
      <div className="card">
        <button onClick={decrease}>-</button>
        <h2 id="count-display">{count}</h2>
        <button onClick={increase}>+</button>
      </div>
    </>
  );
}

export default App;
