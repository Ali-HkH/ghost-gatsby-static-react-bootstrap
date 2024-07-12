import "./App.css";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />

      {router}

      <Footer />
    </>
  );
}

export default App;
