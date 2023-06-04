import { useGlobalContext } from "./context";





const Search =()=>{
    const {query,searchPost } = useGlobalContext()
 return (
 <>
   <h1>Tech News Hub</h1>
   <form onSubmit={(e)=> e.preventDefault()}>  {/* Seaarch about preventDefault() */}
       <div>
        <input
         type="text" 
         placeholder="SEARCH HERE" 
         value={query} 
         onChange={(e)=> searchPost(e.target.value)}/>
       </div>
   </form>
 </>
)}

export default Search;