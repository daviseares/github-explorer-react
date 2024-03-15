import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from '~/pages/Dashboard';
import Repository from '~/pages/Repository';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories/:repository" element={<Repository />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
