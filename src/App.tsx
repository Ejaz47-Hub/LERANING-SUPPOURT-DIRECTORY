import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ProviderPage from './Pages/ProviderPage';

const App = () => {
  return (
    <Router>
      <main className="min-h-screen bg-gray-100 font-sans">
        <Routes>
          <Route index element={<Home />} />
          <Route path="providers/:id" element={<ProviderPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
