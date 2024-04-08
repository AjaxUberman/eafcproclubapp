import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Components/HomePage";
import { useMediaQuery } from "react-responsive";
import { useSelector } from "react-redux";
import MobileMenu from "./MobileMenu";

function App() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const active = useSelector((state) => state.player.active);

  return (
    <div className="relative">
      {isTabletOrMobile && active ? <MobileMenu /> : ""}
      <NavBar />
      <div className="z-0">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
