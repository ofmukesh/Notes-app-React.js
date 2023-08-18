
function App(props) {
    
  return (
    <div>
      <h1>React App</h1>
      <p>My first React app</p>
      <props.outlet />
    </div>
  );
}
export default App;
