import "./styles/index.scss";
import { BrowserRouter } from "react-router-dom";
//import component
import Router from "./Router";

//import style
function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
