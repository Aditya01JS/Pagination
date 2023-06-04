import Search from "./Search";
import Pagination from './Pagination';
import Stories from "./Stories";
import './App.css';
// import {AddContext,  AppProvider} from './context'
// import { useContext } from "react";


function App() {
 
  return (
    <div className="App">      
      <Search />
      <Pagination />
      <Stories/>
      
       
    </div>
  );
}

export default App;
