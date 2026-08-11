import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer } from "@/widgets/layout";
import { ScrollToTopOnNavigate, BackToTop } from "@/widgets/ui";
import routes from "@/routes";

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4">
        <Navbar routes={routes} />
      </div>
      <Routes>
        {routes.map(
          ({ path, element }, key) =>
            element && <Route key={key} exact path={path} element={element} />
        )}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
=======
      <ScrollToTopOnNavigate />
      <Navbar />

      <main>
        <Routes>
          {routes.map(
            ({ path, element }, key) =>
              element && <Route key={key} path={path} element={element} />
          )}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
      <BackToTop />
>>>>>>> origin
    </>
  );
}

export default App;
