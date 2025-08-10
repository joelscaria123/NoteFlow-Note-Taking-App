import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { Link} from 'react-router-dom'

const BackButton = () => {
  

return (
  <Link to={-1}>
   <button
       className="
        btn btn-outline btn-primary
       fixed top-6 left-4 flex items-center
        gap-2 px-2 rounded-lg shadow-md
        text-primary sm:text-primary-content
        hover:bg-primary/90 hover:text-primary-content
        transition-colors duration-200 z-50
        border-primary"
        aria-label="Go Back"
     >
     <FiArrowLeft className="text-inherit size-4 text-base-content" />
     <span className="font-semibold hidden sm:block text-inherit">
      Back
     </span>
    </button>

  </Link>
)

}

export default BackButton
