// import AppRoutes from "./routes/AppRoutes";
// function App() {
//   return <AppRoutes />;
// }
// export default App;
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import AppRoutes from "./routes/AppRoutes";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 900,       // animation time
      once: true,          // runs only first time
      easing: "ease-out",  // smooth movement
      offset: 120          // start animation slightly earlier
    });
  }, []);

  return <AppRoutes />;
}

export default App;
