import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';
import Spinner from '../components/Spinner';

const UpdateNote = () => {

      const [loading, setLoading] = useState(false);
      const [updating, setUpdating] = useState(false);
      const [title, setTitle] = useState("");
      const [content, setContent] = useState("");
      const navigate = useNavigate();
      const { id } = useParams();


      useEffect(() => {

         const fetchNote = async() => {
           
          setLoading(true);

            try{
              const res = await axiosInstance.get(`/notes/${id}`);
              setTitle(res.data.title);
              setContent(res.data.content);
            }
            catch(error){
              console.log(error?.response?.data?.message);
              toast.error("Error in fetching Note")
            }
            finally{
              setLoading(false);
            }
         }
         fetchNote();
      } ,[])


      const handleUpdateNote = async(e) => {
         
        e.preventDefault();

         setUpdating(true);

         try{
            
          const note = {
              title: title.trim(),
              content: content. trim(),
            }

           await axiosInstance.put(`/notes/${id}`,note);
           toast.success("Note Updated Successfully");
           navigate("/");
         }
         catch(error){
           console.log(error?.response?.data?.message);
           toast.error("Error in Updating Note")
         }
         finally{
            setUpdating(false);
         }
      }


   return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 relative">
      <div className="absolute top-6 left-6">
        <BackButton />
      </div>
       {loading ? (<Spinner/>) : (<>
           <div className="w-full max-w-md bg-base-200/40 backdrop-blur-md 
                  shadow-lg rounded-xl p-6 border border-primary/30">
        
       
        <h1 className="text-2xl font-bold text-primary/80 text-center mb-5">
          Update Note
        </h1>

   
        <form className="space-y-4" onSubmit={handleUpdateNote}>
          
   
          <div>
            <label className="label">
              <span className="label-text text-primary/80 font-semibold">Title</span>
            </label>
            <input
              type="text"
              placeholder="Enter title..."
              value={title}
              className="input w-full rounded-lg bg-base-100/50 backdrop-blur-sm border border-primary/30
                         shadow-sm placeholder:text-sm placeholder:opacity-70"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

       
          <div>
            <label className="label">
              <span className="label-text text-primary/70 font-semibold">Content</span>
            </label>
            <textarea
              placeholder="Enter content..."
              value={content}
              className="textarea w-full h-40 rounded-lg bg-base-100/50 backdrop-blur-sm border border-primary/30
                         shadow-sm placeholder:text-sm placeholder:opacity-70 scrollbar-hide"
              onChange={(e) => setContent(e.target.value)}
            />
          </div>

        
          <button 
            type="submit" 
            className="btn w-full bg-primary/80 hover:bg-primary/90 backdrop-blur-lg
                         border border-primary/40 text-primary-content shadow-sm"
          >
              {updating ? "Updating..." : "Update Note"}
          </button>
        </form>
      </div>
        </>
    )}
      
    </div>
  );
}

export default UpdateNote
