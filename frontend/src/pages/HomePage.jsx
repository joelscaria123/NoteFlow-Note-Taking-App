
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import NotesNotFound from '../components/NotesNotFound'
import NoteCard from '../components/NoteCard'
import { useEffect, useState } from 'react'
import { axiosInstance } from '../lib/axios'
import toast from 'react-hot-toast'

const HomePage = () => {
     
     const [loading, setLoading] = useState(true);
     const [notes, setNotes] = useState([]);
    
     useEffect(() => {
          
         const fetchNotes = async () => {
            
            setLoading(true)
            try{
                 const res = await axiosInstance.get("/notes");
                 setNotes(res.data );
            }
            catch (error) {
                if (error.response?.status === 404) {
                      console.log("No Notes available", error.message);
                      setNotes([]);
                  } 
                  else {
                      console.log("Error in fetching Notes", error.message);
                      toast.error("Can't Fetch Notes");
                       }
                     }

            finally{
                setLoading(false);
            }
         }
         fetchNotes();
     },[])

  return (
  <main className='min-h-screen'>
    <Navbar />
    {loading && <Spinner/>}
    {!loading && notes.length === 0 && <NotesNotFound/>}
    {!loading && notes.length>0 && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                         mt-14 pb-6 pt-14 px-5 min-h-full'>
           {notes.map((note) => (
               <NoteCard note={note} key={note._id} setNotes={setNotes}/>
           ))}
        </div>
    )}
  </main>
)

    
}

export default HomePage
