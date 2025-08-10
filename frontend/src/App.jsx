import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import CreateNote from './pages/CreateNote'
import NoteDetails from './pages/NoteDetails'
import UpdateNote from './pages/UpdateNote'



const App = () => {


  return (
    <div className='min-h-screen bg-base-200/20'>
       <Routes>
         <Route path='/' element={<HomePage/>}/>
         <Route path='/notes/create' element={<CreateNote/>}/>
         <Route path='/notes/details/:id' element={<NoteDetails/>}/>
         <Route path='/notes/update/:id' element={<UpdateNote/>}/>
       </Routes>
       <Toaster/>
    </div>
  )
}

export default App
