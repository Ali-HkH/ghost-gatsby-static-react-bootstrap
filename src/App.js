import "./Responsive.css";
import routes from "./routes";
import { useLocation, useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
   const router = useRoutes(routes);
   const routeAddress = useLocation();

   return (
      <>
         <Header isHome={routeAddress.pathname === "/" ? true : false} />
         {router}
         <Footer />
      </>
   );
}

export default App;
