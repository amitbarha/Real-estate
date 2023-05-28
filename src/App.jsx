import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './component/Layout';
import Properties from './component/Properties';
import PropertyPage from './component/PropertyPage';
import HomePage from './component/HomePage';
import PropertiesRent from './component/PropertiesRent';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />}></Route>
        <Route path='properties' element={<Properties />}></Route>
        <Route path='properties/:id' element={<PropertyPage />}></Route>
        <Route path='favorite' element={<PropertiesRent />}></Route>
      </Route>
    </Routes>
  )
}

export default App
