import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Menupage from "./Pages/Menupage";
import ReviewsPage from "./Pages/ReviewsPage";
import ContactPage from "./Pages/ContactPage";
import BowlDetailsPage from "./Pages/BowlDetailsPage";
import Foodmenupage from "./Pages/Foodmenupages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/menu"
          element={<Menupage />}
        />

        <Route
          path="/reviews"
          element={<ReviewsPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

         <Route
          path="/bowl-details"
          element={<BowlDetailsPage />}
        />

  <Route
          path="/Food-menu"
          element={<Foodmenupage />}
        />


        
      </Routes>

      



    </BrowserRouter>
  );
}

export default App;