import React from 'react';
import LandingPage from '../LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';

const Routed = () => {
  const deployRoutes = () => {

    return (
      // <Router>
        <Routes>
          <Route path="/"  element={<LandingPage />} />
          <Route path='/Catalog' element={<Catalog />} />
        </Routes>
      // </Router>
    )
  }
  return (
    <>
    {deployRoutes()}
    </>
  )
}

export default Routed