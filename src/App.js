import NotFound from "./components/pages/NotFound/NotFound";
import Tables from "./components/pages/Tables/Tables";
import SingleTableDetails from "./components/pages/SingleTableDetails/SingleTableDetails";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/table/:tableId" element={<SingleTableDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
