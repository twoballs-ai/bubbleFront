import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home/Home';
import Layout from './components/basicComponents/layouts';
import 'bootstrap/dist/css/bootstrap.css'
import EditorEdit from './components/pages/editor/EditorEdit/EditorEdit';
import DashMain from './components/pages/editor/DashMain';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='editor/' element={<DashMain />}>
          <Route index element={<EditorEdit />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
