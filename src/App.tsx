import React from 'react';
import AppRoutes from './routes';
import GlobalStyle from './utils/theme/global';

const App: React.FC = () => (
  <>
    <AppRoutes />
    <GlobalStyle />
  </>
);

export default App;
