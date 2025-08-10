

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex justify-center 
         items-center bg-base-100 bg-opacity-60 z-50">
      <span className="loading loading-ring 
          loading-lg text-primary">
         </span>
    </div>
  )
}

export default Spinner
