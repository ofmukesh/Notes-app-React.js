function App(props) {
  return (
    <div className="container app">
      <props.outlet />
    </div>
  );
}
export default App;
