import React, { useState } from "react";
import BackButton from '../components/BackButton';
import Spinner from "../components/Spinner";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

 const CreateNote = () => {

       const [loading, setLoading] = useState(false);
       const [title, setTitle] = useState("");
       const [content, setContent] = useState("");
       const navigate = useNavigate();

       const handleCreateNote = async (e) => {
   
        e.preventDefault();

         const note = {
            title: title.trim(),
            content: content.trim(),
         }
          
          setLoading(true);

          try{
              await axiosInstance.post("/notes", note);
              toast.success("Note Created Successfully");
              navigate("/");
          }
          catch(error){
             console.log("Error in creating Note", error.response.data.message);
             toast.error(error.response.data.message);
          }
          finally{
             setLoading(false);
          }
       }
  
    
       return (
      <div className="min-h-screen flex items-center justify-center bg-base-100 relative">
        <div className="absolute top-6 left-6">
          <BackButton />
        </div>

        <div className="w-full max-w-md bg-base-200/50 backdrop-blur-md 
                    shadow-lg rounded-xl p-6 border border-primary/30">
          
        
          <h1 className="text-2xl font-bold text-primary/70 text-center mb-5">
            Create Note
          </h1>

    
          <form className="space-y-4" onSubmit={handleCreateNote}>
            
    
            <div>
              <label className="label">
                <span className="label-text text-primary/80 font-semibold">Title</span>
              </label>
              <input
                type="text"
                placeholder="Enter note title"
                className="input w-full rounded-lg bg-base-100/50 backdrop-blur-sm 
                          border border-primary/30 shadow-sm placeholder:text-sm 
                          placeholder:opacity-70 text-base-content/70"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

        
            <div>
              <label className="label">
                <span className="label-text text-primary/80 font-semibold">Content</span>
              </label>
              <textarea
                placeholder="Enter note content..."
                className="textarea w-full h-32 rounded-lg bg-base-100/50 
                           backdrop-blur-sm border border-primary/30
                          shadow-sm placeholder:text-sm placeholder:opacity-70 text-base-content/70 scrollbar-hide"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>

          
            <button 
              type="submit" 
              className="btn w-full bg-primary/80 hover:bg-primary/90 
                         backdrop-blur-lg border border-primary/40 
                         text-primary-content shadow-sm"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Note"}
            </button>
          </form>
        </div>
      </div>
    );
}

export default CreateNote;