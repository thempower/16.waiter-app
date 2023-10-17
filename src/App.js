import NavBar from './components/views/NavBar/NavBar';
import PageFooter from './components/views/PageFooter/PageFooter';
import NotFound from './components/pages/NotFound/NotFound';
import Tables from './components/pages/Tables/Tables';
import SingleTableDetails from './components/pages/SingleTableDetails/SingleTableDetails';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tableReducer';

const App = () => {

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <div>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Tables />} />
          <Route path="/table/:tableId" element={<SingleTableDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
      <PageFooter />
    </div>
  );
}

export default App;