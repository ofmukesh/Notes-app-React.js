function App(props) {
  return (
    <div className="container">
      <props.outlet />
    </div>
  );
}
export default App;
