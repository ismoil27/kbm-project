import { Routes, Route, Navigate } from "react-router-dom";
import { Navbar, Footer } from "@/widgets/layout";
import { ScrollToTopOnNavigate, BackToTop } from "@/widgets/ui";
import routes from "@/routes";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
