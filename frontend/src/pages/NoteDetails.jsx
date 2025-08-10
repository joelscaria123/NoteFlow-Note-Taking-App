import BackButton from '../components/BackButton'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../lib/axios.js'
import { formatDate } from '../lib/formatDate.js'
import Spinner from '../components/Spinner.jsx'
import toast from 'react-hot-toast'
import DeleteModal from '../components/DeleteModal.jsx'

const NoteDetails = () => {
  const [loading, setLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [note, setNote] = useState({});
  const { id } = useParams();
 

  useEffect(() => {
    const fetchNote = async () => {
      setLoading(true);
      try {
        const note = await axiosInstance.get(`/notes/${id}`);
        setNote(note.data);
      } catch (error) {
        console.log(error?.response?.data?.message);
        toast.error("Error in fetching Note");
      } finally {
        setLoading(false);
      }
    };

    fetchNote();
  }, [id]);


  return (
    <>
      {isDeleting && (
        <DeleteModal 
          setIsDeleting={setIsDeleting}
          NoteDetailsId={note._id} 
        />
      )}
      <div className="min-h-screen flex items-center justify-center bg-base-100 relative">
        <div className="absolute top-6 left-6">
          <BackButton />
        </div>
        {loading ? (
          <Spinner />
        ) : (
          <div
            className="w-full max-w-md bg-base-200/40 backdrop-blur-md 
                      shadow-lg rounded-xl pt-2 px-6 border border-primary/30 flex flex-col pb-2"
          >
            <h1 className="text-2xl font-bold text-primary/80 text-center">
              Note Details
            </h1>

            <div>
              <label className="label">
                <span className="label-text text-primary/80 font-semibold">Title</span>
              </label>
              <div
                className="input w-full rounded-lg bg-base-100/50 backdrop-blur-sm 
                           border border-primary/30 shadow-sm placeholder:text-sm 
                           placeholder:opacity-70 py-2 px-3 scrollbar-hide text-base-content/70"
              >
                {note.title || 'No Title'}
              </div>
            </div>

            <div className="mt-1">
              <label className="label">
                <span className="label-text text-primary/80 font-semibold">Content</span>
              </label>
              <div
                className="textarea w-full h-40 rounded-lg bg-base-100/50 
                           backdrop-blur-sm border border-primary/30
                           shadow-sm placeholder:text-sm placeholder:opacity-70
                           overflow-y-auto resize-none px-3 whitespace-pre-wrap 
                           scrollbar-hide text-base-content/70"
              >
                {note.content || 'No Content'}
              </div>
            </div>

            {/* Created Date and Updated Date in simple lines */}
            <div className="mt-3 text-primary/80 font-semibold">
              <div className='flex justify-between'>
                Created Date:{" "}
                <span className="font-normal text-base-content/70">
                  {note.createdAt ? formatDate(note.createdAt) : 'N/A'}
                </span>
              </div>
              <div className="mt-1 flex justify-between">
                Updated Date:{" "}
                <span className="font-normal text-base-content/70">
                  {note.updatedAt ? formatDate(note.updatedAt) : 'N/A'}
                </span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-6 gap-4 mb-2">
              <Link
                to={`/notes/update/${id}`}
                className="btn btn-primary btn-md flex items-center justify-center gap-1
                            bg-transparent text-primary hover:text-primary-content"
              >
                <FiEdit size={14} />
                Update
              </Link>
              <button
                onClick={() => setIsDeleting(true)}
                className="btn btn-error btn-md flex items-center justify-center gap-1 text-red-500
                           bg-transparent hover:text-primary-content"
              >
                <FiTrash2 size={14} />
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
 export default NoteDetails