import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Dashboard, Repository } from '~/pages';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/repositories/:repository" element={<Repository />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;
