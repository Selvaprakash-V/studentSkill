import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ShowcaseOS from './ShowcaseOS'

function App(){
  return <ShowcaseOS />
}

createRoot(document.getElementById('root')).render(<App />)
