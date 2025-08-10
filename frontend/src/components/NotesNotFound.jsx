import React from 'react'
import { FiInbox, FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const NotesNotFound = () => {
      
      const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-base-100 min-h-screen">
      <FiInbox className="text-4xl text-gray-400 mb-6" />
      <h2 className="text-2xl font-semibold mb-2 text-base-content">
        No Notes Found
      </h2>
      <p className="text-gray-500 max-w-md text-center mb-6">
        You haven’t created any notes yet. Click the button below to add your first note and get started!
      </p>
      <button
        onClick={() => navigate("/notes/create")}
        className="btn btn-primary btn-md flex items-center gap-2"
        aria-label="Add New Note"
      >
        <FiPlus size={20} />
        Add Note
      </button>
    </div>
  )
}

export default NotesNotFound
