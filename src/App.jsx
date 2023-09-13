import { BrowserRouter } from "react-router-dom";
import { RoutesApp } from "./routes/routes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter > 
        <Navbar />
        <RoutesApp/>
      </BrowserRouter>
    </>
  );
}

export default App;
