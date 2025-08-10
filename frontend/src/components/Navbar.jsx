import { NotebookIcon, NotebookTabsIcon, NotepadTextIcon } from 'lucide-react'
import { FiPlus } from 'react-icons/fi'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
 

  return (
    <nav
      className="
        fixed top-0 left-0 right-0 z-50
        flex justify-between items-center
        pl-6 pr-10 py-6
        bg-base-300/30 bg-opacity-50
        backdrop-blur-md
        shadow-md border-b border-primary/40 rounded-sm
      "
    >
      <div className="text-2xl font-bold ml-2 text-primary flex justify-center items-center">
           <NotebookTabsIcon className='mx-2'/>
           NoteFlow
        </div>

    <Link to={"/notes/create"}>
          <button
                aria-label="Add New Note"
                 className="group btn bg-primary/80 hover:bg-primary text-primary-content
                              btn-circle btn-md transition brightness-125 relative"
          >
          <FiPlus size={20} />
         <span
              className="absolute -top-6 left-1/2 -translate-x-1/2
                         whitespace-nowrap bg-gray-800 text-white text-xs
                         rounded px-2 py-1 opacity-0 pointer-events-none
                         group-hover:opacity-100 transition-opacity duration-200"
        >
         Create Note
        </span>
    </button>

    
    </Link>


    </nav>
  )
}

export default Navbar
