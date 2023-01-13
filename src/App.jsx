import Hello from "./components/Hello/Hello";

function App() {
  function hello(value) {
    alert("Hello from <App/>" + value);
  }

  return (
    <div>
      <p>I am the {"<App />"}</p>
      <Hello onHelloClick={hello} />
    </div>
  );
}

export default App;
