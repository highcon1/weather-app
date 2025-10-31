import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import SearchPage from './components/SearchPage'
import NotFound from './components/NotFound'
import SplashScreen from './components/SplashScreen'
import BottomNav from './components/ui/BottomNav'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<SplashScreen />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <BottomNav />
    </>
  )
}

export default App