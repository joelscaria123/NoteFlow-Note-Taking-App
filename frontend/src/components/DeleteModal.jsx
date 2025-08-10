import { useState } from "react";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const DeleteModal = ({ NoteCardId, setIsDeleting, setNotes, NoteDetailsId }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleDeleteNote = async () => {
    const idToDelete = NoteCardId || NoteDetailsId;
    if (!idToDelete) return;

    try {
      setLoading(true);

      await axiosInstance.delete(`/notes/${idToDelete}`);
      toast.success("Note deleted successfully");

      if (NoteCardId) {
        setNotes((prev) => prev.filter((note) => note._id !== NoteCardId));
      }

      if (NoteDetailsId) {
        navigate("/");
      }

     setIsDeleting(false);
    } 
    
      catch (error) {
      console.error(error?.message);
      toast.error("Error in deleting note");
    } 
    
    finally {
      setLoading(false);
    }
    
  };

  return (
    <>
      {loading && <Spinner />}
      <div className="fixed inset-0 bg-base-100 backdrop-blur-md flex items-center justify-center z-50 bg-transparent">
        <div className="bg-base-200/70 rounded-xl p-6 max-w-sm w-full shadow-md">
          <h3 className="text-lg font-semibold text-error mb-4">Are you sure?</h3>
          <p className="mb-6">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div className="flex justify-between gap-4">
            <button
              className="btn btn-outline btn-primary"
              onClick={() => setIsDeleting(false)}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              className="btn btn-outline btn-error"
              onClick={handleDeleteNote}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Yes, Confirm"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteModal;
