import NotFound from "./components/views/NotFound";
import Tables from "./components/pages/Tables";
import SingleTableDetails from "./components/pages/SingleTableDetails";
import Header from "./components/views/Header";
import Footer from "./components/views/Footer";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Tables />} />
        <Route path="/table/:tableId" element={<SingleTableDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default App;
