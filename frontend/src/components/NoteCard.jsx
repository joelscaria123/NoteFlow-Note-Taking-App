import { FiEdit, FiTrash2, FiInfo, FiPlus } from "react-icons/fi";
import { formatDate } from "../lib/formatDate";
import { Link } from "react-router-dom";
import { useState } from "react";
import DeleteModal from "./DeleteModal";



const NoteCard = ({ note, setNotes }) => {

   const [isdeleting, setIsDeleting] = useState(false);

  
   return (
    <>
     {isdeleting && <DeleteModal NoteCardId={note._id} setIsDeleting={setIsDeleting} setNotes={setNotes}/>}
    <div
      className="card relative bg-base-200/20  border border-base-300
                 shadow-sm hover:shadow-lg hover:-translate-y-[2px]
                 transition-all duration-300 rounded-xl overflow-hidden m-3
                 backdrop-blur-lg"
    >
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary/80 via-secondary/70 to-primary/80"></div>
      <div className="p-5 flex flex-col justify-between h-full">
        <h3 className="text-lg font-semibold text-base-content/90 mb-2 truncate">
          {note.title}
        </h3>

        <p className="text-base-content/80 mb-5">
          {note.content.split(" ").slice(0, 4).join(" ") +
            (note.content.split(" ").length > 4 ? "..." : "")}
        </p>

        <div className="flex justify-between items-center mt-auto">
          <span className="text-[0.7rem] uppercase tracking-wide text-base-content/60">
            {formatDate(note.createdAt)}
          </span>

          <div className="flex gap-1 items-center">
            <Link
              to={`/notes/details/${note._id}`}
              aria-label="Info"
              className="relative group btn btn-xs btn-circle btn-ghost text-info hover:bg-info hover:text-info-content transition"
            >
              <FiInfo size={16} />
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2
                           whitespace-nowrap bg-gray-800 text-white text-xs
                           rounded px-2 py-1 opacity-0 pointer-events-none
                           group-hover:opacity-100 transition-opacity duration-200"
              >
                Details
              </span>
            </Link>

            <Link
              to={`/notes/update/${note._id}`}
              aria-label="Edit Note"
              className="relative group btn btn-xs btn-circle btn-ghost text-success hover:bg-success hover:text-success-content transition"
            >
              <FiEdit size={16} />
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2
                           whitespace-nowrap bg-gray-800 text-white text-xs
                           rounded px-2 py-1 opacity-0 pointer-events-none
                           group-hover:opacity-100 transition-opacity duration-200"
              >
                Edit
              </span>
            </Link>

            <button
              className="relative group btn btn-xs btn-circle btn-ghost text-error
                          hover:bg-error hover:text-error-content transition"
              onClick = { () => setIsDeleting(true)} >
              <FiTrash2 size={16} />
              <span
                className="absolute -top-6 left-1/2 -translate-x-1/2
                           whitespace-nowrap bg-gray-800 text-white text-xs
                           rounded px-2 py-1 opacity-0 pointer-events-none
                           group-hover:opacity-100 transition-opacity duration-200"
              >
                Delete
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NoteCard;
