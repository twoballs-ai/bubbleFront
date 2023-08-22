import { useState } from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Home from './components/pages/Home/Home';
import Layout from './components/basicComponents/layouts';
import 'bootstrap/dist/css/bootstrap.css'
import CreatorPage from './components/pages/editor/CreatorPage';
import EditorEdit from './components/pages/editor/EditorEdit/EditorEdit';
import EditorView from './components/pages/editor/EditorView/EditorView';
function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<Home />} />
        <Route path='editor/' element={<CreatorPage />}>
          <Route path='edit' element={<EditorEdit />} />
          <Route path='view' element={<EditorView/>} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App
