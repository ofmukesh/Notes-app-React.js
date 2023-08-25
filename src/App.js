import "./assets/styles/footer.css";
import { Footer } from "./components";

function App(props) {
  return (
    <>
      <div className="container app">
        <props.outlet />
      </div>
      <Footer />
    </>
  );
}
export default App;
