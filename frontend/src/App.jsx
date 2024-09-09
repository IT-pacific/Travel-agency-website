import React from 'react';
import AppRoutes from './config/AppRoutes';
import { AuthContext } from './providers/AuthProvider';
import { useContext } from 'react';

const App = () => {
  return <AppRoutes />;
};

export default App;
