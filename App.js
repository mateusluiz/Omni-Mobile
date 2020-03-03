import React from 'react';
import { StatusBar } from 'react-native';

import AppRoutes from './src/routes';

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#7D40E7" />
    <AppRoutes />
    </>
  );
}
