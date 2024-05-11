import React from 'react';
import AppRouter from './Routers/AppRouter';
import './App.css';
import { MotionConfig } from 'framer-motion';


function App() {
  return (
    <>
     <MotionConfig>
      <AppRouter />
      </MotionConfig>
    </>
  );
}

export default App;